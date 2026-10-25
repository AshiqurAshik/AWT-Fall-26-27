import { InMemoryCacheService } from "@/providers/cache/in-memory/in-memory-cache.service";


@Global()
@Module({
  providers: [InMemoryCacheService],
  exports: [InMemoryCacheService],
})
export class InMemoryCacheModule {}
