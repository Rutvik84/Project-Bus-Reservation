import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { LocalService } from '../local.service';
import { Booking } from '../Models/Booking';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  constructor(public service:UserService,public local:LocalService,private route:Router) { }
  
  ngOnInit(): void {
    
  }
  //confirming transaction
  transaction(){
    console.log(Number(this.local.getData('totalbookedseats')));
    console.log(Number(this.local.getData('totalbookedseats')));
    
    console.log(this.local.getData('userId'));
    console.log(this.local.getData('tid'));
    console.log(this.local.getData('costperseat'));
    console.log(this.local.getData('allseats'));
    console.log(this.local.getData('totalbookedseats'));
    
    let today: object = new Date();
    console.log(today);
    var transdata={amount: Number(this.local.getData('totalamount')),bookingId: Number(this.local.getData('bookingId')),trasactionDateTime:today};
    console.log(transdata);
    
    this.service.addtransaction(transdata).subscribe(data=>{
      console.log(data);
      alert("transaction successfull");
    },err=>{
      console.log("transaction Failed!!");
      alert("Transaction Failed");
    });
    this.clearingData();
    this.route.navigateByUrl("/");
  }
    clearingData(){
      this.local.removeData('tid');
      this.local.removeData('costperseat');
      this.local.removeData('allseats');
      this.local.removeData('totalbookedseats');
      this.local.removeData('bookingId');
      this.local.removeData('totalamount');
    }
  
}
