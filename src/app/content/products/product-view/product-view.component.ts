import { Component, OnInit, Inject } from '@angular/core';

// To get the data passed to teh dialog component. This is used to get the product data to the view.
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  isEdit: boolean;
  name: Name;
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
      //console.log(data);
   }

  ngOnInit() {
    // this.isEdit = false;
    // this.name = new Name('jay', 'sparrow');
    // console.log(this.name);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

class Name {
    firstName: string;
    secondName: string;

    constructor(first: string, second: string){
      this.firstName = first;
      this.secondName = second;
    }

    getFullName() {
      return this.firstName + " " + this.secondName;
    }
}
