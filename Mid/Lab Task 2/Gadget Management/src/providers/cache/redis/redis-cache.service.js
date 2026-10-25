import { appConfig } from "../../../config";
import {

  Logger,


} from "@nestjs/common";

import { createClient } from "redis";

@Injectable()
export class RedisCacheService  {
  
    __init() {this.logger = new Logger(RedisCacheService.name)}

  constructor() {;RedisCacheService.prototype.__init.call(this);
    this.redisClient = createClient({
      url: appConfig.env.REDIS_URL,
    });
  }
  async onModuleDestroy() {
    await this.redisClient.disconnect();
  }

  async onModuleInit() {
    this.redisClient.on("error", (err) =>
      this.logger.error(`Redis Error : ${err}`),
    );
    this.redisClient.on("ready", () =>
      this.logger.log("Redis client connected"),
    );
    this.redisClient.on("end", () =>
      this.logger.log("Redis client disconnected"),
    );
    await this.redisClient.connect();
  }

  getClient() {
    return this.redisClient;
  }

  async getIfCached(key, ttl, callback) {
    const updateCacheAndGetData = async () => {
      const data = await callback();
      this.redisClient.set(
        key,
        JSON.stringify(data),
        ttl === -1 ? undefined : { EX: ttl },
      );
      return data;
    };
    const cachedData = await this.redisClient.get(key);
    if (!!cachedData && typeof cachedData === "string")
      return JSON.parse(cachedData) ;
    return await updateCacheAndGetData();
  }

  async getCachedOr(
    key,
    defaultValue,
    updateOptions,
  ) {
    const cachedData = await this.redisClient.get(key);
    if (updateOptions)
      (async () => {
        const { callback, ttl } = updateOptions;
        const data = await callback();
        this.redisClient.set(
          key,
          JSON.stringify(data),
          ttl === -1 ? undefined : { EX: ttl },
        );
        return data;
      })();
    if (!!cachedData && typeof cachedData === "string") {
      return JSON.parse(cachedData) ;
    }
    return defaultValue;
  }

  async cachedFetch({ ttl, url }) {
    return await this.getIfCached(url, ttl, async () => {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
      throw response.text();
    });
  }
}
