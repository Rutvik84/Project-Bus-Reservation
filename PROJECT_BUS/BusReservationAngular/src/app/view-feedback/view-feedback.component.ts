import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../Models/FeedBack';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  feedbacks : FeedBack[] = [];
  constructor(private _service:UserService) 
  {
    this.getFeed();
   }

  ngOnInit(): void {
  }
//for showing feedback
  getFeed(){
    this._service.getAllFeedback().subscribe(data => {
      this.feedbacks = data;
      console.log(this.feedbacks);
    });
  }

}

