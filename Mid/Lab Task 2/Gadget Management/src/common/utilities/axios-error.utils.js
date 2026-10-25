 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import axios, { } from "axios";
import { HttpException } from "@nestjs/common";

export function throwAxiosHttpException(
  error,
  fallbackMessage = "External API error",
) {
  if (axios.isAxiosError(error) && error.response) {
    const axiosError = error ;
    const status = _optionalChain([axiosError, 'access', _ => _.response, 'optionalAccess', _2 => _2.status]) || 500;
    const data = _optionalChain([axiosError, 'access', _3 => _3.response, 'optionalAccess', _4 => _4.data]) || {};
    const description = data.description || data.message || fallbackMessage;

    throw new HttpException(
      {
        statusCode: status,
        message: description,
        original: data,
      },
      status,
    );
  }

  // Fallback: unknown error → generic 500
  throw new HttpException(
    {
      statusCode: 500,
      message: fallbackMessage,
    },
    500,
  );
}
