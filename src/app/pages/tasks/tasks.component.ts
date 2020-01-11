import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalComponent } from './../../modal/modal.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent  {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(ModalComponent );
  }

}
