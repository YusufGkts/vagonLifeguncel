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
  selector: 'app-graph-revenue',
  templateUrl: './graph-revenue.component.html',
  styleUrls: ['./graph-revenue.component.css']
})
export class GraphRevenueComponent implements OnInit {
  
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    
    // console.log(this.data);
    // alert(this.data + "test");
    this.chartOptions = {
      series: [{
        data: [8, 7, 6, 3, 2, 4, 6, 8, 12, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17]
      }],
      chart: {
        height: 85,
        type: 'area',
        toolbar:{
          show:false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      // colors:['#ffab2d'],
      legend:{
			show:false
      },
      grid: {
        show:false,
        borderColor: '#eee',
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
          
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 3,
        curve:'straight',
        colors:['#222fb9'],
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            width: 1,
            dashArray: 3
          }
        },
      },
      yaxis: {
        show: false,
        labels: {
			show: false,
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
      fill:{
        opacity: 1,
        colors:['#222fb9']
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
