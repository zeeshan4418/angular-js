import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics=['Angular JS','Vue JS','React JS'];
  userModel = new User('Zeeshan', 'memon@gmail.com', 3043016411, '', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  constructor(private _enrollmentService: EnrollmentService){}


  validateTopic(value){
    console.log(value);
    if(value === "default"){
        this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success !!',data),
          error => this.errorMsg = error.statusText
        );
    
  }
}
