
import { Product } from './product';

export class Stock {
    id: number;
    unit_size: number;
    uinit_price: number;
    quantity_per_unit: number;
    unit_weight: number;
    units_in_stock: number;
    units_on_order: number;
    reorder_level: number;
    products: Product[];

    constructor() {}
    printStock() {
        console.log(this.uinit_price);
    }
}
