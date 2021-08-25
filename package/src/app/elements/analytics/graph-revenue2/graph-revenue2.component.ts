import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill;
};

@Component({
  selector: 'app-graph-revenue2',
  templateUrl: './graph-revenue2.component.html',
  styleUrls: ['./graph-revenue2.component.css']
})
export class GraphRevenue2Component implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My first dataset",
          data: [25, 20, 50, 41, 55, 45, 70]
        }
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar:{
          show:false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        colors:['#222fb9'],
        curve: "smooth"
      },
      fill: {
        opacity: 0,
        type: "solid",
        
      },
      
      grid: {
        show: true,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			  labels: {
          style: {
            colors:'#2130b8',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#787878',
            fontSize: '13px',
            fontFamily: 'Poppins',
          },
          formatter: function (value:any) {
            return value;
          }
        },
      },
    };
  }
  
  ngOnInit(): void {
  }
  
  
}
