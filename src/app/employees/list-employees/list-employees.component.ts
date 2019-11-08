import { Component, OnInit, HostListener, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Department } from 'src/app/models/department.model';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Alert } from 'selenium-webdriver';
import { EventEmitter } from 'events';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;
  filteredEmployees: Employee[];
  @Output() scrollDownValue = new EventEmitter(); 
  constructor(private _employeeService: EmployeeService,
    private router: Router, private _route: ActivatedRoute,
    private appService: AppService
    ) { }

    ngOnInit() {
      this.employees = this._employeeService.getEmployees();
    }
  // onClick(employeeId: number) {
  //   this.router.navigate(['/employees', employeeId],{
  //     queryParams: {'searchTerm': this.searchTerm, 'testParam':'testParam'}
  //   });
  // }

  department: Department;
  @HostListener('scroll', ['$event.target'])
  myScroll(event: any){
    if (event.target.offsetHeight + event.target.scrollTop 
      >= event.target.scrollHeight) {
      this.appService.getValueOfScroll('scollDown');
      // this.scrollDownValue.emit('scrollDown');
      // alert(this.scrollDownValue.emit('scrollDown'));
    } 
  }


}
