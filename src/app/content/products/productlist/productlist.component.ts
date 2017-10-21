import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // to navigate on buttton click as routerlink wont go to child routes
// for facilitating the relative routing to the sibiling component - Activated route is imported
// to use material dialog to display the product view and edit.
import {MdDialog} from '@angular/material';


// local services
import { ProductService } from '../../../shared/services/product.service';
// local component
import { ProductViewComponent } from '../product-view/product-view.component';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  products = [];
  loading = false;
  errorOnfetch = false;
  productToSearch: string;
  filteredProducts = [];
  constructor(private _productservice: ProductService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              public dialog: MdDialog) { }

  ngOnInit() {
    this.loading = true;
    this._productservice.getProducts()
      .subscribe(
        result => {
        this.loading = false;
        this.products = result;
        this.assignCopy();

        },
        error => {
          // console.log ('error in local component');
          this.loading = false;
          this.errorOnfetch = true;
        });

  }

  assignCopy() {
    this.filteredProducts = Object.assign([], this.products);
  }

  filterProducts(value) {
    if (!value) {
      this.assignCopy();
    }

    this.filteredProducts = Object.assign([], this.products).filter (
      item => item.product_name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )

    // console.log(this.filteredProducts.length);
  }
  goToAddProduct(){
    // there are two ways to do it, give the full URL or realtive url
    // for full URL need Router to be injected. see blow - the code
    // this._router.navigate(['home/products/add']);
    // for the relative way, we need activated router to be injected and navigate to relative path way.
    this._router.navigate(['../add'], { relativeTo: this._activatedRoute });
  }

  openViewDailog(item) {
    const dialogRef = this.dialog.open(ProductViewComponent, {
          height: '100%',
          width: '600px',
          data: item,
        });

    // console.log(dialogRef);

  }

}
