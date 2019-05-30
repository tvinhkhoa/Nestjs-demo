import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private readonly items: string[] = ['Pizza', 'Coke'];

  findAll(): string[] {
    return this.items;
  }

  getHello(): string {
    return 'Hello, this is Items!';
  }

  create(item: string) {
    return this.items.push(item);
  }
}
