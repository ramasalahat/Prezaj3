import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;

    ngOnInit(){      

    }
}
