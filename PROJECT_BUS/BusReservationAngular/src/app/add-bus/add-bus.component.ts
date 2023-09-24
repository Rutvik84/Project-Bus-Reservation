import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  constructor(private route:Router, private service:UserService) { }

  ngOnInit(): void {
  }
 //Adding Bus in db
  addBus(createBus: NgForm){
    console.log(createBus.value);
    this.service.add_bus(createBus.value).subscribe(data=>{
      alert("Successfully added");
      createBus.reset();
      this.route.navigateByUrl('/')
    });
  }

}
