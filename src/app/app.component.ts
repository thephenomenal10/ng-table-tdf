import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _enrollmentService: EnrollmentService){}
  topics =["Angular", "Flutter", "React JS", "NOde JS", "Vue Js"];

  userModel = new User('', 'sw@d.co', 1234567890, 'sw@d.co', '', true);
  topicHasError=true;
  isSubmitted =false;
  errMsg="";

  validateTopic(value){
    if(value === "default")
      this.topicHasError= true;
    else
      this.topicHasError =false;
  }

  onSubmit() {
    this.isSubmitted =true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log("data  succes", data),
        error => this.errMsg =error.statusText
        )
  }
}
