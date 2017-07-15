import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//local service
import { ProductService } from '../../../models/products/product.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  foods = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];


// hack just for mocking product addition.
newproduct = {
              "sku": "ifnot",
              "product_name": "ifnot",
              "product_description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "msrp": 120,
              "available_size": [
                  1,
                  2
              ],
              "available_colors": [
                  2
              ],
              "discount": 1,
              "product_available": 0,
              "discount_available": 1,
              "picture_url": "ifnot",
              "ranking": 1,
              "note": "1",
              "manufacturer_id": 1,
              "categories": [
                  1
              ]
          }
  error: string;
  constructor(private _productservice: ProductService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  addProduct(value: any){
    // console.log(value);
    this.newproduct.product_name = value.product_name;
    this.newproduct.sku = value.product_barcode;
    this.newproduct.picture_url = value.picture_url;

      this._productservice.addProduct(this.newproduct)
        .subscribe(
          result => {
          console.log(result);
          console.log('new product added');
          this._router.navigate(["../list"], { relativeTo: this._activatedRoute });
        },
          error => {
            console.log('from error block' + error);
            this.error = 'Failed to create a new product, please try again';
          }
        );

  }
}
