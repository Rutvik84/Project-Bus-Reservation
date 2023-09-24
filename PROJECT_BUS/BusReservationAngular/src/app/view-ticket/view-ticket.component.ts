import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LocalService } from '../local.service';
import { Booking } from '../Models/Booking';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  userid: number;
  constructor(public service:UserService,public local:LocalService,private route:Router,private authentication:AuthenticationService) { this.getSeats();}

  ngOnInit(): void {
  }
  getSeats() {
    this.service.getbookedSeat().subscribe(data => {
      this.service.viewseats = data;
      console.log(this.service.viewseats);
      this.userid=Number(this.local.getData('userId'));
      console.log(this.userid);
    });
  }

  get isUserLogin() {
    return this.authentication.isUserLogin();
  }

  deleteTicket(){
    alert("Are you really want to delete the ticket");
    
  }
}
