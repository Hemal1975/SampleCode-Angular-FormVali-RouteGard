import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable()
export class EmployeeService {
    listEmployee: Employee[] = [
        {
          id: 1,
          name: 'Stave',
          gender: 'Male',
          contactPreference: 'Email',
          email: 'mark@pragimtech.com',
          dateOfBirth: new Date('10/25/1988'),
          department: 'IT',
          isActive: true,
          photoPath: 'assets/images/mark.png'
        },
        {
          id: 2,
          name: 'Mary',
          gender: 'Female',
          contactPreference: 'Phone',
          phoneNumber: 2345978640,
          dateOfBirth: new Date('11/20/1979'),
          department: 'HR',
          isActive: true,
          photoPath: 'assets/images/mary.png'
        },
        {
          id: 3,
          name: 'Jekky',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: 'IT',
          isActive: false,
          photoPath: 'assets/images/john.png'
        },
        {
          id: 3,
          name: 'Jecksan',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: 'IT',
          isActive: false,
          photoPath: 'assets/images/john.png'
        },
        {
          id: 3,
          name: 'Joseph',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: 'IT',
          isActive: false,
          photoPath: 'assets/images/john.png'
        },
        {
          id: 3,
          name: 'Jimmy',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: 'IT',
          isActive: false,
          photoPath: 'assets/images/john.png'
        },
        {
          id: 3,
          name: 'Jisyca',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: 'IT',
          isActive: false,
          photoPath: 'assets/images/john.png'
        }
      ];


      getEmployees() {
        return this.listEmployee;
      }

      // getEmployees(): Observable<Employee[]> {
      //   return Observable.of(this.listEmployee).delay(2000);
      // }

      getEmployeeId(id: number): Employee {
        return this.listEmployee.find(e => e.id === id);
      }

      saveFormData(formData: Employee){
        this.listEmployee.push(formData);
      }

      getEmployee(id: number): Employee {
        return this.listEmployee.find(e => e.id === id);
    }
}
