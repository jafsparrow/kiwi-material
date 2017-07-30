import { Injectable } from '@angular/core';
// http module to communicate with server
import { Http, Headers, Response, RequestOptions } from '@angular/http';

// rxjs objeservable and map to work with jwt token
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  public token: boolean;
  constructor(private http: Http) {
  //  setting tocken if available in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string): Observable<boolean> {
      // console.log('print from login service long'+ email+ password);
      // console.log(JSON.stringify({email: email, password: password }));
      const body = JSON.stringify({email: email, password: password });
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post('https://kiwidist.herokuapp.com/account/login/', body, options) //, headers)
          .map((response: Response) => {
            // login success if jwt is in the response.
            const token = response.json().token; // && response.json.token;
            if (token) {
              this.token = true;
              // store jwt and username in the local storage.
              localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));

              return true;
            }else {
                console.log('in the fail block');
                return false;
              }

          });

  }

  logout(): void {
    // clear token remove user from local storage to log user out
    console.log('Inside the logout function, it should log out the user and remove the token');
    this.token = false;
    localStorage.removeItem('currentUser');
  }


}
