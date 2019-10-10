import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url + '/api/employees/all');
  }

  public getEmployeesByPage(page: number, size: number) {
    return this.http.get(this.url + '/employeeses?page=' + page + '&size=' + size);
  }
}
