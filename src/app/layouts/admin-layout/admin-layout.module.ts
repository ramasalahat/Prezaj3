import { BundlesCardsComponent } from './../../bundles-cards/bundles-cards.component';
import { TaskInfoComponent } from './../../task-info/task-info.component';
import { ModalComponent } from './../../modal/modal.component';
import { SearchComponent } from './../../pages/tasks/search/search.component';
import { Task1Component } from './../../pages/tasks/task1/task1.component';
import { MyLineChartComponent } from './../../pages/an-employee/my-line-chart/my-line-chart.component';
import { EditProfileComponent } from './../../pages/an-employee/edit-profile/edit-profile.component';
import { TasksAndBundlesComponent } from './../../pages/an-employee/tasks-and-bundles/tasks-and-bundles.component';
import { FilterByComponent } from './../../pages/filter-by/filter-by.component';
import { Employeechart1Component } from '../../pages/an-employee/employeechart1/employeechart1.component';
import { AnEmployeeComponent } from './../../pages/an-employee/an-employee.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { EmployeesComponent }       from '../../pages/employees/employees.component';
import { TasksComponent }           from './../../pages/tasks/tasks.component';
import { BundlesComponent }         from './../../pages/bundles/bundles.component';
import { MessagesComponent }        from './../../pages/messages/messages.component';
import { AddComponent } from '../../pages/employees/add/add.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material' ;
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatDialogModule,
    MaterialModule,
    ChartsModule,
  ],
  entryComponents:[AddComponent],
  
  declarations: [
    DashboardComponent,
    UserComponent,
    EmployeesComponent,
    BundlesComponent,
    TasksComponent,
    MessagesComponent,
    AddComponent,    
    AnEmployeeComponent,
    Employeechart1Component,
    FilterByComponent,
    TasksAndBundlesComponent,
    EditProfileComponent,
    MyLineChartComponent,
    Task1Component,
    SearchComponent,
    ModalComponent,
    TaskInfoComponent,
    BundlesCardsComponent
    
      ]
})

export class AdminLayoutModule {}
