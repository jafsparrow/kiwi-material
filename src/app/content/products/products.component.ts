import { Component, OnInit } from '@angular/core';

// local services
import { ProductService } from '../../shared/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  loading = false;
  categories = []; // to store the categories which should be passed down to the product add component to dispaly product category.

  constructor(private _productservice: ProductService) { }

  ngOnInit() {
    // this.loading = true;
    // this._productservice.getProducts()
    //     .subscribe(result => {
    //       this.loading = false;
    //       this.products = result;

    //    });
  }


}
