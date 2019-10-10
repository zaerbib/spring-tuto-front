import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../service/customers-service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: any = [];
  size = 10;
  totalPages: number;
  currentPage: number;
  pageArrayIndex = new Array<number>();

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
  }

  public onClickCustomers() {
      this.customerService.getCustomersByPage(this.currentPage, this.size)
        .subscribe(data => {
          this.totalPages = data['page'].totalPages;
          this.pageArrayIndex = new Array<number>(this.totalPages);
          this.customers = data['_embedded'];
        }, error => {
          console.log(error);
          console.log('Echec récupération de la liste de client !');
        });
  }

  public onClickCustomerDelete() {
    this.customers = [];
    this.pageArrayIndex = [];
  }

  public onCustomersPage(i: number) {
    this.currentPage = i;
    this.onClickCustomers();
  }
}
