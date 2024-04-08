import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    findAll(): Item[]{
        return this.items;
    }

    findById(id:String): Item{
        return this.items.find((item) => item.id === id);
    }

    create(item: Item): Item{
        this.items.push(item);
        return item;
    }

    update(id: String): Item{
        const item = this.findById(id);
        item.status = ItemStatus.SOLD_OUT;
        return item;
    }

    delete(id: String): void{
        this.items = this.items.filter((item) => item.id !== id);
    }
}
