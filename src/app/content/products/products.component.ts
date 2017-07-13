import { Component, OnInit } from '@angular/core';

// local services
import { ProductService } from '../../models/products/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  dataSource: any | null;

  constructor(private _productservice: ProductService) { }

  ngOnInit() {
    this._productservice.getProducts()
        .subscribe(result => {
          this.products = result;
          this.dataSource = result;
       });
  }


}
