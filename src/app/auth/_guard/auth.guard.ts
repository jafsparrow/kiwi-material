import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
     if (localStorage.getItem('currentUser')) {
          // logged in so return true
          console.log('from auth guard check when the current uses is true');
          return true;
        }
        // not logged in so redirect to login page
        console.log('from auth guard check when the current uses is false');
        this.router.navigate(['/login']);
        return false;
  }
}
