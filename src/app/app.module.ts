import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeService } from './employees/employee.service';
import { FormsModule } from '@angular/forms';
import { EmployeeDisplayComponent } from './employees/employee-display/employee-display.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactive-guard.service';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { AccordianComponent } from './shared/accordian/accordian.component';
import { ComparePasswordValidators } from './shared/comparepasswordvalidators.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    EmployeeDisplayComponent,
    EmployeeFilterPipe,
    AccordianComponent,
    ComparePasswordValidators
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,
    CreateEmployeeCanDeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
