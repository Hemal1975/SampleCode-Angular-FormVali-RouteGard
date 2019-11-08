import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

export class EmployeeListResolveService {

    constructor(private _employeeService: EmployeeService) {}
 
}