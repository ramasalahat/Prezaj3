import { AddTaskComponent } from './add-task/add-task.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent  {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(AddTaskComponent);
  }

}
