import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // to navigate on buttton click as routerlink wont go to child routes
// for facilitating the relative routing to the sibiling component - Activated route is imported
// local services
import { ProductService } from '../../../models/products/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = [];
  loading = false;

  constructor(private _productservice: ProductService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this._productservice.getProducts()
        .subscribe(result => {
          this.loading = false;
          this.products = result;

       });
  }

  goToAddProduct(){
    // there are two ways to do it, give the full URL or realtive url
    // for full URL need Router to be injected. see blow - the code
    // this._router.navigate(['home/products/add']);
    //for the relative way, we need activated router to be injected and navigate to relative path way.
    this._router.navigate(["../add"], { relativeTo: this._activatedRoute });
  }

}