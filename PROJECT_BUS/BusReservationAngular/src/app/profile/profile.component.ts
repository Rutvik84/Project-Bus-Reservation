import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: Router, public service:UserService,public local:LocalService) { }
  userid: number;
  ngOnInit(): void {
    this.userid=Number(this.local.getData('userId'));
  }
//profile section showing profile data
  profile(){
    alert("hii");

    console.log(this.service.userList);
  }



}
