import { AnEmployeeComponent } from '../../pages/an-employee/an-employee.component';
import { MessagesComponent } from '../../pages/messages/messages.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';


import { EmployeesComponent }       from '../../pages/employees/employees.component';
import { TasksComponent }           from '../../pages/tasks/tasks.component';
import { BundlesComponent }         from '../../pages/bundles/bundles.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'employees',  component: EmployeesComponent },
    { path: 'bundles',  component: BundlesComponent },
    { path: 'tasks',  component: TasksComponent },
    { path: 'messages',  component: AnEmployeeComponent },
    { path: 'employees/1',   component: AnEmployeeComponent },


];
