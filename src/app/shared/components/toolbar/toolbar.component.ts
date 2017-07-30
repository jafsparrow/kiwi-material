import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.toggleSidenav.emit(null);
  }

  logout() {
    console.log('logout local function calling the service function');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
