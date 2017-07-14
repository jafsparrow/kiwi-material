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
            // console.log(response.json());
            return response.json();
           });
   }

   addProduct(product?: string): Observable<any>{
     // add post request with all the options and return  observablee.

    //  let options = new RequestOptions({
    //     	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    //     });
  	// 	return this.http.post(`${this.BASE_URL}`,JSON.stringify(body), options)
  	// 		.map((res:Response) => res.json())
  	// 		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    // to mock the add test.
    console.log('before adding new prodcut');
    let newproduct = {
                  "sku": "1298323294",
                  "product_name": "",
                  "product_description": "Mexican 3 awesomo",
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
                  "picture_url": "http://bakedbree.com/wp-content/uploads/2010/09/vanilla-ice-cream_12.jpg",
                  "ranking": 1,
                  "note": "1",
                  "manufacturer_id": 1,
                  "categories": [
                      1
                  ]
              }
        const headers = new Headers({ 'Content-Type': 'application/json',
                                     'Authorization': 'Bearer ' + this.currentUser.token });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('https://kiwidist.herokuapp.com/product/products/', JSON.stringify(newproduct), options)
        		.map((res:Response) => res.json())
        		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateProduct(id: string) {

  }

  updateStock(id: string, stock: number) {
    // let options = new RequestOptions({
    //     	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    //     });
    //
		// return this.http.put(`${this.BASE_URL}${body['_id']}`,JSON.stringify(body), options)
		// 	.map((res:Response) => res.json())
		// 	.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteProduct(product_id: string) {
    // let options = new RequestOptions({
    //   headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    // });
    //
    // return this.http.delete(`${this.BASE_URL}${usersID}`,options)
    // .map((res:Response) => res.json())
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }
  }

}
