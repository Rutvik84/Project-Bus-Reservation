import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AdminLogin } from '../Models/admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminList:AdminLogin[]=[];
  constructor(private router:Router,private service:UserService,private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }

  //loging the admin and showing admin page
  adminLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.service.adminlogin(loginForm.value).subscribe(data => {
      this.adminList=data;
      console.log(this.adminList);
      this.authentication.isAdminLoggedIn = true;
      this.router.navigateByUrl('/');
    },err=>{
      console.log("Login failed");
      alert("Username or Password Invalid");
      loginForm.reset();
    });
  }

}
