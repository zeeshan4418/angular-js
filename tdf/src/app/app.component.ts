import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics=['Angular JS','Vue JS','React JS'];
  userModel = new User('', 'memon@gmail.com', 411, '', 'morning', true);
  topicHasError = true;

  validateTopic(value){
    console.log(value);
    if(value === "default"){
        this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

}
