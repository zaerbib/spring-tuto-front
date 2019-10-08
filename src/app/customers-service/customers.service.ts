import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
const options = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url + "/api/customers/all", options);
  }
}
 