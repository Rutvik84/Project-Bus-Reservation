import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { LocalService } from '../local.service';
import { Booking } from '../Models/Booking';
import { BusTrip } from '../Models/BusTrip';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  currentTrip: BusTrip[]=[];
  tid: number;
  book: Booking=new Booking(); 
  bookdata: Booking[]=[];
  seats=new Map<number,boolean>();
  totalSeats: number;
  allseats: string="";
  totalbookedseats: number=0;
  alreadybooked: number=0;

  constructor(public local:LocalService,public service:UserService,private route:Router,private activeRoute:ActivatedRoute) {  }

  ngOnInit(): void {
    //active ssnapshot
    const tid= this.activeRoute.snapshot.params["id"];
    console.log(tid);

    //using local storage to store
    this.local.saveData('tid',tid+'');
    //printing bus trip
    this.service.getBusTripbyId(tid).subscribe(data=>{
         this.currentTrip=data;
         console.log(this.currentTrip);
       });
 
       //showing seats
    this.service.getSeat(tid).subscribe(data=>{
      this.bookdata=data;
      console.log(this.bookdata);
       //creating seats
     this.currentTrip.forEach(element => {
      console.log(element.totalseats);
      this.local.saveData('costperseat',element.cost+'');
      this.totalSeats=element.totalseats;
       for(var i=1;i<=element.totalseats;i++){
        for(var j=1;j<5;j++){
        this.seats.set(i,false);
        }
        }
    });
      if(this.bookdata!=null){
        this.bookdata.forEach(element => {
          console.log(element.seatNumber);
          var seatArray=element.seatNumber.split(" ");
          console.log(seatArray);
          seatArray.forEach(element => {
            this.seats.set(Number(element),true);
          });
        });
      }
    });   
    
     for(var i=1;i<=this.seats.size;i++){
       if(this.seats.get(i)){
         this.alreadybooked++;
       }
     }
    console.log(this.seats);
    console.log(this.alreadybooked);

  }

//for mapping a booking ticket
  bookTicket(bookTicketForm: NgForm) {
    console.log(bookTicketForm.value);
    console.log(this.seats.size);
    for(var i=1;i<=this.seats.size;i++){
      console.log(i,bookTicketForm.value[''+i]);
      if(bookTicketForm.value[''+i]){
        this.allseats+=i+' ';
        this.totalbookedseats++;
      }
    }
    this.local.saveData('allseats',this.allseats);
    this.local.saveData('totalbookedseats',this.totalbookedseats+'');
    console.log(this.local.getData('allseats'),this.local.getData('totalbookedseats'));
    this.route.navigateByUrl('confirmticket/'+this.tid);
  }
}
