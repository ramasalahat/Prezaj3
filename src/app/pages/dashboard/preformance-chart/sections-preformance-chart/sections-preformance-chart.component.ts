import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'sections-preformance-chart',
  templateUrl: './sections-preformance-chart.component.html',
  styleUrls: ['./sections-preformance-chart.component.css']
})
export class SectionsPreformanceChartComponent implements OnInit {
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 60, 70, 75, 70, 87], label: 'Preformance' },
    { data: [50, 59, 80, 60, 40, 60, 70], label: 'Commitment' },
    { data: [65, 80, 88, 80, 75, 82, 82], label: 'Reviews' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  
  public lineChartPlugins = [  ]

public dynHeight = 200;

  constructor() { }

  ngOnInit() {
  }

}
