 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import {



  ForbiddenException,
} from "@nestjs/common";

import { ROLES_KEY } from "../decorators/roles.decorator";


@Injectable()
export class RolesGuard  {
  constructor( reflector) {;this.reflector = reflector;}

  canActivate(context) {
    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If no roles are required → allow
    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user;

    // console.log("RolesGuard - User Roles:", user);

    if (!user) throw new ForbiddenException("User not authenticated");

    const hasRole = requiredRoles.some((role) => _optionalChain([user, 'access', _ => _.roles, 'optionalAccess', _2 => _2.includes, 'call', _3 => _3(role)]));

    if (!hasRole) {
      throw new ForbiddenException("You do not have permission");
    }

    return true;
  }
}
