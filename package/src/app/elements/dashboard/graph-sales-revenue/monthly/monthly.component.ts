import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexGrid,
} from "ng-apexcharts";


export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  stroke?: ApexStroke | any;
  dataLabels?: ApexDataLabels | any;
  yaxis?: ApexYAxis | any;
  title?: ApexTitleSubtitle | any;
  labels?: string[] | any;
  legend?: ApexLegend | any;
  subtitle?: ApexTitleSubtitle | any;
  colors?: string[] | any;
  fill?: ApexFill | any;
  tooltip?: ApexTooltip | any;
  grid?: ApexGrid | any;
};


@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {
  
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    
    // console.log(this.data);
    // alert(this.data + "test");
    this.chartOptions = {
      series: [{
        data: [50, 75, 34, 55, 25, 70, 30, 80, 30, 90, 25, 65]
      }],
      chart: {
        height: 350,
        type: 'area',
        toolbar:{
          show:false
        },
      },
      colors: ["#222fb9"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width:4,
        curve: 'smooth'
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",],
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
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    };
  }
  
  ngOnInit(): void {
  }
  
  
}
