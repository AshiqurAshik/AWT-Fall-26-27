 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import { plainToClass } from "class-transformer";
import {

  registerDecorator,

  validateSync,
} from "class-validator";

/**
 * @decorator
 * @description A custom decorator to validate a validation-schema within a validation schema upload N levels
 * @param schema The validation Class
 */
export function ValidateNested(
  schema,
  validationOptions,
) {
  return function (object, propertyName) {
    registerDecorator({
      name: "ValidateNested",
      target: _optionalChain([object, 'optionalAccess', _ => _.constructor]),
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value, args) {
          args.value;
          if (Array.isArray(value)) {
            for (let i = 0; i < (value).length; i++) {
              if (validateSync(plainToClass(schema, value[i])).length) {
                return false;
              }
            }
            return true;
          } else
            return validateSync(plainToClass(schema, value)).length
              ? false
              : true;
        },
        defaultMessage(args) {
          if (Array.isArray(_optionalChain([args, 'optionalAccess', _2 => _2.value]))) {
            for (let i = 0; i < (_optionalChain([args, 'optionalAccess', _3 => _3.value])).length; i++) {
              return (
                `${_optionalChain([args, 'optionalAccess', _4 => _4.property])}::index${i} -> ` +
                validateSync(plainToClass(schema, _optionalChain([args, 'optionalAccess', _5 => _5.value, 'access', _6 => _6[i]])))
                  .map((e) => e.constraints)
                  .reduce(
                    (acc, next) => acc.concat(Object.values(_nullishCoalesce(next, () => ( "")))),
                    [],
                  )
                  .toString()
              );
            }
          } else
            return (
              `${_optionalChain([args, 'optionalAccess', _7 => _7.property])}: ` +
              validateSync(plainToClass(schema, _optionalChain([args, 'optionalAccess', _8 => _8.value])))
                .map((e) => e.constraints)
                .reduce(
                  (acc, next) => acc.concat(Object.values(_nullishCoalesce(next, () => ( "")))),
                  [],
                )
            ).toString();
          return "";
        },
      },
    });
  };
}
