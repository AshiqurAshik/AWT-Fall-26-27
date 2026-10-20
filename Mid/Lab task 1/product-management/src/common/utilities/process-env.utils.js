export class ProcessEnv {
   static get(
    key,
  ) {
    return process.env[key] ;
  }

   static isProduction() {
    return this.get("NODE_ENV") === "production";
  }
}
