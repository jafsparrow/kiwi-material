import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../models/products/product.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  type = 'line';
  type1= 'bar';
  
  data = {
    labels: ["JAN", "FEB", "MAR", 'APR', 'MAY', 'JUNE'],
    datasets: [
      {
        label: 'Last Quarter Sales',
        data: [65, 59, 200, 60, 79, 83],
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
      }
    ]
  };
options = {
  responsive: true,
  maintainAspectRatio: false,
};

products: any;
  constructor(private productService: ProductService,
              private domSantizer: DomSanitizer) {

   }

  ngOnInit() {
        this.productService.getProducts()
      .subscribe(result => {
        // console.log(result.length);
        for ( let i = 0; i < result.length; i++) {
          this.products = result;
          //console.log(this.product);
        }
       });
  }

  sanitizeUrl(url: string) {
    return this.sanitizeUrl(url);
  }



}
