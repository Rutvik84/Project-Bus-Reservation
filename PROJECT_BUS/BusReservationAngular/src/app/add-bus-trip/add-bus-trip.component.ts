import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BusTrip } from '../Models/BusTrip';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-bus-trip',
  templateUrl: './add-bus-trip.component.html',
  styleUrls: ['./add-bus-trip.component.css']
})
export class AddBusTripComponent implements OnInit {

  constructor(private route:Router,public service:UserService) { }

  ngOnInit(): void {
    
    
  }
  //adding a new bus trip

  addBusTrip(createBustrip: NgForm){
    console.log(createBustrip.value);
    this.service.addBusTrip(createBustrip.value).subscribe(data=>{
      alert("Successfully added");
      createBustrip.reset();
      this.route.navigateByUrl('/')
    });
  }

}
