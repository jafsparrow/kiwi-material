import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

// rxjs objeservable and map to work with jwt token
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// local imports

@Injectable()
export class CategoryService {
    remoteURL = environment.remoteURL

  token: string ;
  currentUser: any;
  constructor(private http: Http) {
  //  setting tocken if available in local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser.token;
  }

  getProductCategories(): Observable<any> {
       // add authorization header with jwt token
       const headers = new Headers({ 'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + this.currentUser.token });
       const options = new RequestOptions({ headers: headers });
       return this.http.get(`${this.remoteURL}/product/categories/`, options)
           .map((response: Response) => {
            return response.json();
           });
   }

  getAvailableSizes(): Observable<any> {
      // add authorization header with jwt token
      const headers = new Headers({ 'Content-Type': 'application/json',
                                  'Authorization': 'Bearer ' + this.currentUser.token });
      const options = new RequestOptions({ headers: headers });
      return this.http.get(`${this.remoteURL}/product/sizes/`, options)
          .map((response: Response) => {
          return response.json();
          });
  }

  getAvailableColours(): Observable<any> {
      // add authorization header with jwt token
      const headers = new Headers({ 'Content-Type': 'application/json',
                                  'Authorization': 'Bearer ' + this.currentUser.token });
      const options = new RequestOptions({ headers: headers });
      return this.http.get(`${this.remoteURL}/product/colors/`, options)
          .map((response: Response) => {
          return response.json();
          });
  }

}
