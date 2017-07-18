import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// authentication serive
import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loading = false;
  loginStatus = true;
  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
    // this.email = 'hello beautiful';
    // this.password = 'temppass';
  }

  ngOnInit() {
  }
  login() {
    console.log('clicked on it' + this.email + this.password);
    // this.router.navigateByUrl('/home');
  }

  loginSubmit() {
    console.log('hello I am the one submitted');
    this.loading = true;
    this.authenticationService.login(this.email, this.password)
        .subscribe(
          result => {
            console.log(result);
            if (result === true) {
                // login successful
                this.router.navigate(['/home']);
            } else {
                // login failed
                // console.log('this is when the response does not have token in it.) ;
                this.loading = false;
                this.loginStatus = false;
            }
        },
        error => {
          // console.log('error block ' + error);
          // console.log('Login observable returned error, map function did not work) ;
          this.loading = false;
          this.loginStatus = false;
        }
        );
  }



}
