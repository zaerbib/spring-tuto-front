import { Component, OnInit } from '@angular/core';
import { OfficesService } from '../service/offices-service/offices.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  offices: any = [];
  size = 10;
  currentPage = 0;
  totalPages: number;
  pageArrayIndex: Array<number>;

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
  }

  public onClickOffices() {
    this.officesService.getOfficesByPages(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pageArrayIndex = new Array<number>(this.totalPages);
        this.offices = data['_embedded'];
      }, error => {
        console.log(error);
        console.log('Echec récupération de la liste de client !');
      });
  }

  public onClickOfficesDelete() {
    this.offices = [];
  }

  public onOfficesPage(i: number) {
    this.currentPage = i;
    this.onClickOffices();
  }
}
