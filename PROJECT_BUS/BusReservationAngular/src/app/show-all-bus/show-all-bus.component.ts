import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditBusComponent } from '../show-all-bus/edit-bus/edit-bus.component';
import { Bus } from '../Models/Bus';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-all-bus',
  templateUrl: './show-all-bus.component.html',
  styleUrls: ['./show-all-bus.component.css']
})
export class ShowAllBusComponent implements OnInit {

  buses : any [] = [];
  
  constructor(private router:Router,private _service:UserService) { this.getBuses();}
  @ViewChild(EditBusComponent) edit:EditBusComponent;
  ngOnInit(): void {
  }
//shiwing all the buses
  getBuses() {
    this._service.showAllbuses().subscribe(data => {
      console.log(data);
      this.buses = data;
    });
  }

  

  populatebus(selectedtrip: Bus){
    console.log(selectedtrip);
    this._service.busdetails = selectedtrip;
    if(this.edit.isSlide==='off'){
    this.edit.hideshowSlide();
    } 
  }

  transfer(){
    this.router.navigateByUrl('/');
   }

}