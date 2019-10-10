import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url + '/api/customers/all');
  }

  public getCustomersByPage(page: number, size: number) {
    return this.http.get(this.url + '/customerses?page=' + page + '&size=' + size);
  }
}
