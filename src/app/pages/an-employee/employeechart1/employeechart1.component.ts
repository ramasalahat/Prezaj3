import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'employeechart1',
  templateUrl: './employeechart1.component.html',
  styleUrls: ['./employeechart1.component.css']
})
export class Employeechart1Component implements OnInit {

  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Databases', 'React', 'Angular', 'Algorithems', 'AI', 'VR', 'Design'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Skills' },
    { data: [50, 80, 10, 25, 5, 70, 60], label: 'Courses' },
    { data: [10, 55, 70, 90, 30, 20, 25], label: 'Tasks' },
    
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
