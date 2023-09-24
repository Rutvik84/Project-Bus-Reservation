import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Users } from "../Models/Users";
import { UserService } from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = 'user';
  userList: Users[]=[];
  constructor(private router:Router, private userService : UserService) { }

  ngOnInit(): void {
  }
  //user registration form
  user(registerUser: NgForm) {
    console.log(registerUser.value);
    this.userService.register(registerUser.value).subscribe(data => {
       this.userList=data;
       console.log(this.userList);
       registerUser.reset();
       alert("Registration Successfull");
       this.router.navigateByUrl('login');
    },err=>{
      alert("Registration Failed");
    });
  }
}
