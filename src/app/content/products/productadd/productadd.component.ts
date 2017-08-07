import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//local service
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService} from '../../../shared/services/category.service';


// import custom model.
import { Category } from '../../../shared/models/category';
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})

// Inject categories service to fetch all the categories to display in the multiselect category.
export class ProductaddComponent implements OnInit, OnDestroy {
  foods = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];

categories: Category[];
availableColors: any[];
availableSizes: any[];
errors: string[] = ['hello I am an error', 'me too'];

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

  constructor(private _productservice: ProductService,
              private _categoryService: CategoryService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._categoryService.getProductCategories()
      .subscribe(result => {
        this.categories = result;
        console.log(this.categories);
      },
      error => {
        console.log('Some thing wrong while fetching category');
        // this.errors.push('There was an error while connecting to the server');
      });

    this._categoryService.getAvailableColours()
      .subscribe(result => {
        this.availableColors = result;
        console.log(this.availableColors);
      },
      errors => {
        console.log('error in fetaching color data');
        // this.errors.push('Error in fetching available colors');
      });

    this._categoryService.getAvailableSizes()
      .subscribe(result => {
        this.availableSizes = result;
        console.log(this.availableSizes);
      },
      errors => {
        console.log('error in feaching available size data');
        // this.errors.push('Error in fetching available product sizes');
        // console.log(this.errors);
      });
  }


  addProduct(value: any) {
    console.log(value);
    this.newproduct.product_name = value.product_name;
    this.newproduct.sku = value.product_barcode;
    this.newproduct.picture_url = value.picture_url;

      this._productservice.addProduct(this.newproduct)
        .subscribe(
          result => {
          console.log(result);
          console.log('new product added');
          this._router.navigate(['../list'], { relativeTo: this._activatedRoute });
        },
        error => {
        console.log('from error block' + error);
      }
        );

  }
  ngOnDestroy() {
    // need to destry all the subscribed items.
  }
}
