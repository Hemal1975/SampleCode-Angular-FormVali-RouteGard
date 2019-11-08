import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.scss']
})
export class EmployeeDisplayComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  private selectedRoutes: number;

  constructor(private _router: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.selectedRoutes = +this._router.snapshot.paramMap.get('id');
  }

  handleClick() {
    this.notify.emit(this.employee);
  }

  viewEmployee(employeeId: number) {
    this.router.navigate(['/employees', this.employee.id]
    // {
      //     queryParams: {'searchTerm': this.searchTerm, 'testParam':'testParam'}
        //  }
         );
  }

}
