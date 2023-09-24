import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BusTrip } from 'src/app/Models/BusTrip';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public service:UserService,private route:Router) { }
  @ViewChild('checkbox1') checkbox:ElementRef;
  isSlide: string='off';
  ngOnInit(): void {
    this.service.showAllbuses().subscribe(data=>{
      this.service.busData=data});
  }

  // submit(form:NgForm)
  // {
   
  //    this.editBusTrip(form);
  // }
  
  editBusTrip(myform:NgForm)
  {
    console.log(myform.value);
    this.service.editBusTrip(myform.value).subscribe(d=> {
      this.resetForm(myform);
    });
  }
  resetForm(myform:NgForm)
  {
    myform.form.reset(myform.value);
    this.service.bustrip=new BusTrip();
    this.hideshowSlide();
  }
  hideshowSlide(){
    if(this.checkbox.nativeElement.checked){
      this.checkbox.nativeElement.checked=false;
      this.isSlide='off';
    }else{
      this.checkbox.nativeElement.checked=true;
      this.isSlide='on';
    }
  }



}
