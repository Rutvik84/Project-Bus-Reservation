import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAdminLoggedIn = false;
  isUserLoggedIn = false;
  constructor(private http: HttpClient) { }

  isAdminLogin() {
    if (this.isAdminLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
  isUserLogin() {
      if (this.isUserLoggedIn) {
        return true;
      } else {
        return false;
      }
    }
}