import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet, BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    legend: {
      display: false,
  },  
    responsive: true,
      scales : {
        yAxes: [{
           ticks: {
              beginAtZero: true,
              
            }
        }]
      }
  };
  public barChartLabels: Label[] =  ['Total Budget' , 'Used Budget'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
 
  public ChartColors: Color[] = [
    {backgroundColor: ['#EF8157', '#FBC658']},]
  public barChartData: ChartDataSets[] = [
    { data: [5000, 3000]
    
    }
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
