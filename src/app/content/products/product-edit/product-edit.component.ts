import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

// local component
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
  let dialogRef = this.dialog.open(ProductViewComponent, {
        // height: '100%',
        width: '600px',
      });

  console.log(dialogRef);
  }
}
