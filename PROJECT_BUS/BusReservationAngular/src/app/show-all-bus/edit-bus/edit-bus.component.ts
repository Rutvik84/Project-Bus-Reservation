import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Bus } from 'src/app/Models/Bus';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  constructor(private route:Router, public service: UserService) { }
  @ViewChild('checkbox1') checkbox:ElementRef;
  isSlide: string='off';
  ngOnInit(): void {
  }
  editBus(myform:NgForm)
  {
    console.log(myform.value);
    this.service.editBus(myform.value).subscribe(d=> {
      this.resetForm(myform);
    });
  }
  resetForm(myform:NgForm)
  {
    myform.form.reset(myform.value);
    this.service.busdetails=new Bus();
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
