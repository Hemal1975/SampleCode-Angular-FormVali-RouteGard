import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularCRUD';

  constructor(private appService: AppService) {}

  ngOnInit() {

  }

  onAccept() {
   if(this.appService.scrollValue == undefined){
     alert('Please read all information');
   } else {
     alert('You can go to the Next Page');
   }
  }
}
