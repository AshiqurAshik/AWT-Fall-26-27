
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gadget } from "./entites/gadget.entity";
import { GadgetController } from "./gadget.controller";
import { GadgetService } from "./gadget.service";

@Module({
  imports: [TypeOrmModule.forFeature([Gadget])],
  controllers: [GadgetController],
  providers: [GadgetService],
  exports: [GadgetService],
})
export class GadgetModule {}
