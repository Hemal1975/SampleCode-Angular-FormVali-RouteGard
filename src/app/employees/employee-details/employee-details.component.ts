import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor(private employeeService: EmployeeService,
    private _route: ActivatedRoute, private router: Router
  ) { }

    private _id: number;

  // getNameAndGender(): string {
  //   return this.employee.name + ' ' + this.employee.gender;
  // }

  // handleClick() {
  //   this.notify.emit(this.employee);
  // }

  ngOnInit() {
    //  const id = +this.router.snapshot.params['id'];
    this._route.paramMap.subscribe(
      param => {
     this._id =  +param.get('id');
     this.employee = this.employeeService.getEmployeeId(this._id);
      }
    )
  }

  onViewEmployee(){
    
    if (this._id < 3 ) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this.router.navigate(['/employees', this._id], {
      queryParamsHandling: 'preserve'
    });
  }

}
