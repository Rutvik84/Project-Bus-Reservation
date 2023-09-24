import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public local:LocalService,private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }
//used login checked
  get isUserLogin() {
    return this.authentication.isUserLogin();
  }

}
