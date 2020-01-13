import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Software', 'Web', 'AI&Games'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartColors: Color[] = [
    {backgroundColor: ['#EF8157', '#FBC658', '#66615B',]},
    {backgroundColor: ['#EF8157', '#FBC658', '#66615B',]},
    {backgroundColor: ['#EF8157', '#FBC658', '#66615B',]}
  ];


  constructor() { }

  ngOnInit() {
  }

}
