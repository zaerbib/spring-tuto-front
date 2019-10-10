import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/employees-service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any = [];
  size = 10;
  currentPage = 0;
  totalPages: number;
  pageArrayIndex: Array<number>;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
  }

  public onClickEmployees() {
    this.employeesService.getEmployeesByPage(this.currentPage, this.size)
        .subscribe(data => {
          this.totalPages = data['page'].totalPages;
          this.pageArrayIndex = new Array<number>(this.totalPages);
          this.employees = data['_embedded'];
        }, error => {
          console.log(error);
          console.log('Echec récupération de la liste de client !');
        });
  }

  public onClickEmployeesDelete() {
    this.employees = [];
    this.pageArrayIndex = [];
  }

  public onEmployeesPage(i: number) {
    this.currentPage = i;
    this.onClickEmployees();
  }
}
