import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public local:LocalService,private router:Router,private auth : AuthenticationService) { }

  ngOnInit(): void {
  }
 // checking for admin login
  get isAdminLogin() {
    return this.auth.isAdminLogin();
  }
  //checking used login
  get isUserLogin() {
    return this.auth.isUserLogin();
  }
//checking logout
  logout() {
    this.auth.isAdminLoggedIn = false;
    this.auth.isUserLoggedIn = false;
    this.local.clearData();
    this.router.navigateByUrl('/');
  }



}
