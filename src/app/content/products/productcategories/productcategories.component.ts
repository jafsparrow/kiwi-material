import { Component, OnInit } from '@angular/core';

// local services
import { CategoryService } from '../../../shared/services/category.service';
@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.component.html',
  styleUrls: ['./productcategories.component.css']
})
export class ProductcategoriesComponent implements OnInit {
  productCategories = [];
  loading = false;
  loadingStatus = true;
  constructor(private _categories: CategoryService) { }

  ngOnInit() {
    this.loading = true;
    // console.log('category on init');
    this._categories.getProductCategories()
      .subscribe(
        result => {
          this.productCategories = result;

          this.loading = false;
        },
        error => {
          this.loadingStatus = false;
        }
      )
  }

 onSelect(event){
   console.log(event);
 }

}
