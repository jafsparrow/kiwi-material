// import { Stock } from './stock';
// import { Category } from './category';

export class Product {
        sku: string;
        product_name: string;
        product_description: string;
        manufacturer_id: string;
        msrp: string;
        available_size: number[];
        available_colors: number[];
        discount: number;
        product_available: string;
        discount_available: number;
        picture_url: string;
        ranking: number;
        note: string;
        // categories: Category[];
        // stock_details: Stock[];
}
