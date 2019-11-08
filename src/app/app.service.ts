import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  scrollValue: string;

  constructor() { }

  getValueOfScroll(value: string){
    return this.scrollValue = value;
  }
}
