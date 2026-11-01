import { RedisCacheService } from "@/providers/cache/redis/redis-cache.service";


@Global()
@Module({
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
