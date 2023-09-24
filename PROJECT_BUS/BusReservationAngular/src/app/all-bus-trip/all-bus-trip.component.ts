import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { BusTrip } from '../Models/BusTrip';
import { UserService } from '../user.service';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-all-bus-trip',
  templateUrl: './all-bus-trip.component.html',
  styleUrls: ['./all-bus-trip.component.css']
})
export class AllBusTripComponent implements OnInit {
  //tripData:   BusTrip[]=[];
  constructor(public local:LocalService,private route:Router, public service:UserService,public datepipe:DatePipe) { this.getBustrip();}
  @ViewChild(EditComponent) edit:EditComponent;
  isSlide: string='off';
  ngOnInit(): void {
  }
  //used to show all bus trip 
  getBustrip() {
    this.service.showBusTrip().subscribe(data => {
      console.log(data);
      this.service.tripData = data;
    });
  }
  //used to fill data in the bus trip form 
  populatetrip(selectedtrip: BusTrip){
    console.log(selectedtrip);
    let df=this.datepipe.transform(selectedtrip.fromDatetime,'yyyy-MM-dd');
    selectedtrip.fromDatetime=df;
    let tf=this.datepipe.transform(selectedtrip.toDatetime,'yyyy-MM-dd');
    selectedtrip.toDatetime=tf;
    this.service.bustrip = selectedtrip;
    if(this.edit.isSlide==='off'){
    this.edit.hideshowSlide();
    } 
  }

 transfer(){
  this.route.navigateByUrl('/');
 }
}
