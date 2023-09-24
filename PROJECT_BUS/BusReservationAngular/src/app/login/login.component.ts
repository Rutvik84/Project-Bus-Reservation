import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LocalService } from '../local.service';
import { Users } from '../Models/Users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router,public _service:UserService,private authentication:AuthenticationService,private local:LocalService) { }

  ngOnInit(): void {
  }
//user login form 
  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this._service.userlogin(loginForm.value).subscribe(data => {
      this._service.userList=data;
      console.log(this._service.userList);
      this.authentication.isUserLoggedIn = true;
      console.log(data.userId);
      this._service.userList.forEach(element => {
        this.local.saveData('userId',element.userId+'');
      this.local.saveData('username',element.firstName+" "+element.lastName);
      console.log(this.local.getData('userId'));
      });
      
      this.router.navigateByUrl('/');
    },err=>{
      console.log("Login failed");
      alert("Username or Password Invalid");
      loginForm.reset();
    });
  }
  
}
