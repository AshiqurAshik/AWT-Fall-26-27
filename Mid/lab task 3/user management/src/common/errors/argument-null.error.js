 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }export class ArgumentNullError extends Error {
  
  constructor(paramName) {
    super("Value can not be null or undefined");
    this.paramName = _nullishCoalesce(paramName, () => ( ""));
  }
}
