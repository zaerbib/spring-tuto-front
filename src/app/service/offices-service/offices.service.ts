import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url + '/api/offices/all');
  }

  public getOfficesByPages(page: number, size: number) {
    return this.http.get(this.url + '/officeses?page=' + page + '&size=' + size);
  }
}
