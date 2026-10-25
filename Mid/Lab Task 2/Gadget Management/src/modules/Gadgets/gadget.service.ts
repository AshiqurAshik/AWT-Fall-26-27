
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Gadget } from "./entities/gadget.entity";
import { CreateGadgetDto, UpdateGadgetDto } from "./dto/gadget.dto";

@Injectable()
export class GadgetService {
  constructor(
    @InjectRepository(Gadget)
    private readonly gadgetRepository: Repository<Gadget>,
  ) {}

  async getGadgets() {
    try {
      const gadgets = await this.gadgetRepository.find();
      return gadgets;
    } catch (error) {
      throw error;
    }
  }

  async getGadget(id: string) {
    try {
      const gadget = await this.gadgetRepository.findOne({
        where: { id: id },
      });

      if (!gadget) {
        throw new NotFoundException("Gadget with ID not found");
      }

      return gadget;
    } catch (error) {
      throw error;
    }
  }

  async createGadget(dto: CreateGadgetDto) {
    try {
      const response = this.gadgetRepository.create(dto);
      return await this.gadgetRepository.save(response);
    } catch (error) {
      throw error;
    }
  }

  async updateGadget(id: string, dto: UpdateGadgetDto) {
    try {
      if (!id) {
        throw new NotFoundException("Gadget with ID not found");
      }

      const gadget = await this.gadgetRepository.findOne({
        where: { id: id },
      });

      if (!gadget) {
        throw new NotFoundException("Gadget with ID not found");
      }

      Object.assign(gadget, dto);

      const { id: gid, ...rest } = gadget;

      return await this.gadgetRepository.update({ id: id }, rest);
    } catch (error) {
      throw error;
    }
  }

  async deleteGadget(id: string) {
    try {
      const gadget = await this.gadgetRepository.findOne({
        where: { id: id },
      });

      if (!gadget) {
        throw new NotFoundException("Gadget with ID not found");
      }

      return await this.gadgetRepository.delete({ id: id });
    } catch (error) {
      throw error;
    }
  }
}
