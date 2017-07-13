import { Injectable } from '@angular/core';
// http module to communicate with server
import { Http, Headers, Response, RequestOptions } from '@angular/http';

// rxjs objeservable and map to work with jwt token
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  public product: any;
  token: string ;
  currentUser: any;
  constructor(private http: Http) {
  //  setting tocken if available in local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser.token;
  }

  getProducts(): Observable<any> {
       // add authorization header with jwt token
       console.log(this.currentUser.token);
       const headers = new Headers({ 'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + this.currentUser.token });
       const options = new RequestOptions({ headers: headers });
       return this.http.get('https://kiwidist.herokuapp.com/product/products/', options)
           .map((response: Response) => {
            response.json();
            console.log(response.json());
            return response.json();
           });
   }
}
