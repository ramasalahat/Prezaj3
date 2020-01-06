import { AnEmployeeComponent } from '../../pages/an-employee/an-employee.component';
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


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatDialogModule,
    MaterialModule,

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

    
      ]
})

export class AdminLayoutModule {}
