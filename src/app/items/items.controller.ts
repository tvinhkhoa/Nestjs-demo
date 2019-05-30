import { Get, Post, Body, Controller } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async index(): Promise<string> {
    return this.itemsService.getHello();
  }

  @Get('/all')
  async findAll(): Promise<string[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() item: string) {
    // return 'Not yet implemented';
    return this.itemsService.create(item);
  }
}