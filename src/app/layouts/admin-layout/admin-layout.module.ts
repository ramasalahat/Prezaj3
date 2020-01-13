
import { BundlesCardsComponent } from './../../bundles-cards/bundles-cards.component';
import { TaskInfoComponent } from './../../task-info/task-info.component';

import { SearchComponent } from './../../pages/tasks/search/search.component';
import { Task1Component } from './../../pages/tasks/task1/task1.component';

import { SkillsNeededChartComponent } from '../../pages/dashboard/charts/skills-needed-chart/skills-needed-chart.component';
import { DashHoverTimelineComponent } from '../../pages/dashboard/dash-hover-timeline/dash-hover-timeline.component';
import { TasksTableComponent } from '../../pages/dashboard/tasks-table/tasks-table.component';
import { CardsComponent } from '../../pages/dashboard/cards/cards.component';
import { Section3ChartComponent } from './../../pages/dashboard/preformance-chart/section3-chart/section3-chart.component';
import { Section2ChartComponent } from './../../pages/dashboard/preformance-chart/section2-chart/section2-chart.component';
import { SectionsPreformanceChartComponent } from './../../pages/dashboard/preformance-chart/sections-preformance-chart/sections-preformance-chart.component';
import { PreformanceChartComponent } from './../../pages/dashboard/preformance-chart/preformance-chart.component';
import { TimelineComponent } from './../../pages/an-employee/timeline/timeline.component';
import { MyBarChartComponent } from './../../pages/dashboard/charts/my-bar-chart/my-bar-chart.component';

import { MyLineChartComponent } from './../../pages/an-employee/my-line-chart/my-line-chart.component';
import { EditProfileComponent } from './../../pages/an-employee/edit-profile/edit-profile.component';
import { TasksAndBundlesComponent } from './../../pages/an-employee/tasks-and-bundles/tasks-and-bundles.component';
import { FilterByComponent } from '../../pages/employees/filter-by/filter-by.component';
import { Employeechart1Component } from '../../pages/an-employee/employeechart1/employeechart1.component';
import { AnEmployeeComponent } from './../../pages/an-employee/an-employee.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
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
import { MyDoughnutChartComponent } from 'app/pages/dashboard/charts/my-doughnut-chart/my-doughnut-chart.component';
import { TopempComponent } from 'app/pages/dashboard/g_com/topemp/topemp.component';
import { ComtypeComponent } from 'app/pages/dashboard/g_com/topemp/comtype/comtype.component';
import { MyScatterChartComponent } from 'app/pages/dashboard/charts/my-scatter-chart/my-scatter-chart.component';
import { ABundleComponent } from 'app/pages/bundles/bundle_detail/a-bundle/a-bundle.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatDialogModule,
    MaterialModule,
    ChartsModule,
    MatIconModule,
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
    
    TaskInfoComponent,
    BundlesCardsComponent,
    

    TimelineComponent,
    PreformanceChartComponent,
    DashboardComponent,
    SectionsPreformanceChartComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    TopempComponent,
    Section2ChartComponent,
    Section3ChartComponent,
    ComtypeComponent,
    MyScatterChartComponent,
    ABundleComponent,
    CardsComponent,
    TasksTableComponent,
    DashHoverTimelineComponent,
    SkillsNeededChartComponent,
 ]

})

export class AdminLayoutModule {}
