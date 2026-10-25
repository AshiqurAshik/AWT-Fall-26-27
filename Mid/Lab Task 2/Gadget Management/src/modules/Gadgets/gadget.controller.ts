
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { GadgetService } from "./gadget.service";
import { CreateGadgetDto, UpdateGadgetDto } from "./dto/gadget.dto";

@Controller("gadgets")
export class GadgetController {
  constructor(private readonly gadgetService: GadgetService) {}

  @Get()
  async getGadgets() {
    return await this.gadgetService.getGadgets();
  }

  @Get(":id")
  async getGadget(@Param("id") id: string) {
    return await this.gadgetService.getGadget(id);
  }

  @Post()
  async createGadget(@Body() dto: CreateGadgetDto) {
    return await this.gadgetService.createGadget(dto);
  }

  @Patch(":id")
  async updateGadget(
    @Param("id") id: string,
    @Body() dto: UpdateGadgetDto,
  ) {
    return await this.gadgetService.updateGadget(id, dto);
  }

  @Delete(":id")
  async deleteGadget(@Param("id") id: string) {
    return await this.gadgetService.deleteGadget(id);
  }
}
