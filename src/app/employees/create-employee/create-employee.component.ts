import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('createemployeeForm', {static: false})
   createemployeeForm : NgForm;

  myFormValue = false;
  myfirstName : string;
  mylastName: string;
  myEmail: string;

  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Pay roll'}
  ];

 constructor(private employeeService: EmployeeService) { }
   submitted = false;
 ngOnInit() {
 }

 model: any = {};

 onSubmit() {
   if(this.createemployeeForm.valid){
     this.myFormValue = true;
    this.myfirstName = this.createemployeeForm.form.controls['firstName'].value;
    this.mylastName = this.createemployeeForm.form.controls['lastName'].value;
    this.myEmail = this.createemployeeForm.form.controls['email'].value;
   } else {
    this.submitted = true;
   }
 }

 onClear() {
   this.createemployeeForm.reset();
 }

 saveEmployee(empForm: Employee) {
   this.employeeService.saveFormData(empForm);
 }

}
