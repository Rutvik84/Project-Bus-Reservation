import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private router:Router,private _service:UserService) { }

  ngOnInit(): void {
  }
//feedback enter
  giveFeedbackFormMethod(giveFeedbackForm: NgForm) {
    console.log(giveFeedbackForm.value);
    this._service.giveFeedback(giveFeedbackForm.value).subscribe(data => {
      alert("FeedBack send Successfully");
      giveFeedbackForm.reset();
      this.router.navigateByUrl('/');
    },err=>{
      console.log("Error");
    });

  }

}
