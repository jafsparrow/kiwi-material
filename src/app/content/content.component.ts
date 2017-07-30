import { Component, OnInit } from '@angular/core';
import { Stock } from '../shared/models/stock';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  stocks: Stock[];
  items: any;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.http.get('assets/stock.json')
    //   .map(res => res.json())
    //   .subscribe( result => {
    //       // console.log(result);
    //       this.stocks = result;
    //       console.log(this.stocks);
    //       this.stocks.forEach(stock => {
    //         // console.log(stock.unit_weight);
    //         console.log(stock.products)
    //         stock.products.forEach(product => {
    //           console.log(product.sku);
    //         });
    //         // const item = new Stock();
    //         // item.printStock();
    //       })
    //   });

      // console.log(this.items);
      // for ( let i = 0 ; i < this.items.length ; i++) {
      //       this.items[i].printStock();
      // }
  }

}
