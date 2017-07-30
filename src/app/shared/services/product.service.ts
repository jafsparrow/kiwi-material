import { Injectable } from '@angular/core';
// http module to communicate with server
import { Http, Headers, Response, RequestOptions } from '@angular/http';

// rxjs objeservable and map to work with jwt token
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


// ***************************************************//
// Login: if the last fetch was before an hour, forcefull pull the data from server.
@Injectable()
export class ProductService {
  public products: any;
  token: string ;
  currentUser: any;
  lastFetchTime: Date;
  constructor(private http: Http) {
  //  setting tocken if available in local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser.token;
  }



//   // this is the final code to update after having the product interface or class implemented.
//   getAllProducts() {

//     if(this.products != null) 
//     {
//         return Observable.of(this.products);
//     } 
//     else 
//     {
//         return this.http.get(url)
//             .map(res => <Product[]> res.json())
//             .do(products => this.products = products);
//             .catch (this.handleError);
//     }
// }

// handleError() {

// }
  getProducts(): Observable<any> {

  // check if the items is already save in the memory (product variable)
  if (!this.shouldIfetchNew()) {
    console.log('when i am already loaded product');
    return Observable.of(this.products);
  }
  console.log('from new fetch part');
  // add authorization header with jwt token
  //  console.log(this.currentUser.token);
  const headers = new Headers({ 'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + this.currentUser.token });
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://kiwidist.herokuapp.com/product/products/', options)
    .map((response: Response) => {
      return response.json();
    })
    .do(products => {
      this.products = products;
      this.lastFetchTime = new Date();
    });
  }

shouldIfetchNew(): boolean {
  // if not check if the local products has items in it.
  // first if the last fetch was 1 hour before.
  // if both true just return the current objects otherwise pull one new.
  if (this.products != null) {
    const currentTime = new Date();
    const hourDifference = Math.floor((currentTime.getSeconds() - this.lastFetchTime.getSeconds()) / 36e5);
    console.log(hourDifference);
    if (hourDifference > 1) {
      return true;
    }else {
      return false;
    }
  }else {
    return true;
  }
}

// to implement faster data load - load one time and use it different component.
//two ways to do it. either cash it or use shared service and instantiate only one time.
// example of cashing. here cashdata is just an array, if it is existing it creates observatle
// from the array of data which will prevent the http call and makes thigs faster.
// getData() {
//   if (this.cachedData) {
//     return Observable.of(this.cachedData);
//   } else {
//     return this.http.get(...)
//           .map(res => res.json())
//           .do((data) => {
//             this.cachedData = data;
//           });
//   }
// }

   addProduct(newproduct?: any): Observable<any>{
     // add post request with all the options and return  observablee.

    //  let options = new RequestOptions({
    //     	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    //     });
  	// 	return this.http.post(`${this.BASE_URL}`,JSON.stringify(body), options)
  	// 		.map((res:Response) => res.json())
  	// 		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    // to mock the add test.
    // console.log('before adding new prodcut');
    // let newproduct = {
    //               "sku": "1298323294",
    //               "product_name": "",
    //               "product_description": "Mexican 3 awesomo",
    //               "msrp": 120,
    //               "available_size": [
    //                   1,
    //                   2
    //               ],
    //               "available_colors": [
    //                   2
    //               ],
    //               "discount": 1,
    //               "product_available": 0,
    //               "discount_available": 1,
    //               "picture_url": "http://bakedbree.com/wp-content/uploads/2010/09/vanilla-ice-cream_12.jpg",
    //               "ranking": 1,
    //               "note": "1",
    //               "manufacturer_id": 1,
    //               "categories": [
    //                   1
    //               ]
    //           }
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
