import { AddComponent } from './add/add.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(AddComponent);
  }
}
