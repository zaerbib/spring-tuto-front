import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers-service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: any = [];

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.onClickCustomers();
  }

  public onClickCustomers() {
      this.customerService.getAll()
        .subscribe(data => {
          this.customers = data;
        },
        error => {
          console.log(error);
          console.log("Echec récupération de la liste de client !");
        });
  }
}
