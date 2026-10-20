 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


import {



  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class AuthGuard  {
  constructor(  redisCacheService) {;this.redisCacheService = redisCacheService;}

  async canActivate(context) {
    const req = context.switchToHttp().getRequest();
    const bearerToken = req.headers.authorization;

    const token =
      _optionalChain([bearerToken, 'optionalAccess', _ => _.split, 'call', _2 => _2("Bearer "), 'access', _3 => _3[1]]) || _optionalChain([bearerToken, 'optionalAccess', _4 => _4.split, 'call', _5 => _5(" "), 'access', _6 => _6[1]]);

    if (!token)
      throw new UnauthorizedException(
        "You are not authenticated, missing bearer token",
      );

    const redisValue = await this.redisCacheService.getClient().get(token);

    if (redisValue === "blacklisted") {
      throw new UnauthorizedException(
        "Session expired or logged out. Please login again.",
      );
    }

    // const authPayload = await this.authService.verifyAuthToken(token);

    // if (!authPayload)
    //   throw new UnauthorizedException(
    //     "You are not authenticated, invalid or expired token",
    //   );

    // req.user = authPayload;

    // if (!authPayload)
    //   throw new UnauthorizedException(
    //     "You are not authenticated, no logged in users",
    //   );

    return true;
  }
}
