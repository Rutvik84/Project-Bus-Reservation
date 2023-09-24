import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BusTrip } from '../Models/BusTrip';
import { UserService } from '../user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  currentTrip: BusTrip;
  constructor(public service:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  //show number of buses
  booking(bookbus: NgForm) {
    console.log(bookbus.value);
    this.service.bookingshow(bookbus.value).subscribe(data => {
      this.service.booktripdt=data;
      console.log(this.service.booktripdt);
    },err=>{
      console.log("No Buses");
      alert("No Buses");
      bookbus.reset();
    });
    console.log(this.service.booktripdt);
  }

  book(tripId: number){
    this.route.navigateByUrl("booktripticket/"+tripId);
  }
}
