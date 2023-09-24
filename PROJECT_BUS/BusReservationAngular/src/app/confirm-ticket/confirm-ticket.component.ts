import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../local.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-confirm-ticket',
  templateUrl: './confirm-ticket.component.html',
  styleUrls: ['./confirm-ticket.component.css']
})
export class ConfirmTicketComponent implements OnInit {
   tripid: number;
   totalamount: number;
   bookedData: number;
  constructor(public service:UserService,public local:LocalService,private route:Router, private activeRoute:ActivatedRoute) { 
    this.totalamount=Number(this.local.getData('totalbookedseats'))* Number(this.local.getData('costperseat'));
  }

  ngOnInit(): void {
    const tid= this.activeRoute.snapshot.params["id"];
    console.log(this.local.getData('tid'));

  }
  //sending user to transaction page
  transfer(){
    var data={tripId: Number(this.local.getData('tid')),userId: Number(this.local.getData('userId')),cost: this.totalamount,seatNumber: String(this.local.getData('allseats'))};
    this.service.addSeat(data).subscribe(d=>{
      console.log(d);
      this.bookedData=d.bookingId;
      this.local.saveData('bookingId',this.bookedData+'');
      this.local.saveData('totalamount',this.totalamount+'');
      console.log(this.bookedData);
    },err=>{
      alert("Booking Failed");
      console.log("Booking Failed");
      this.route.navigateByUrl("/");
    });
    this.route.navigateByUrl('transaction')
  }


}
