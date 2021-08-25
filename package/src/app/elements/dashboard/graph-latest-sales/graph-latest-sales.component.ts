import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,  
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  labels?: any | any;
  fill?: ApexFill | any;
  legend?: ApexLegend | any;
  dataLabels?: ApexDataLabels | any;
  colors?: string[] | any;
  stroke?: ApexStroke | any;
  plotOptions?: ApexPlotOptions | any;
};



@Component({
  selector: 'app-graph-latest-sales',
  templateUrl: './graph-latest-sales.component.html',
  styleUrls: ['./graph-latest-sales.component.css']
})
export class GraphLatestSalesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [25, 35, 40],
      chart: {
        width: 220,
        height: 220,
        type: "donut",
        sparkline: {
					enabled: true,
				},
      },
      dataLabels: {
        enabled: false
      },
        stroke: {
          width: 0,
        },
      fill: {
        type: "solid"
      },
      legend: {
        position: "bottom",
        show:false
      },
			plotOptions: {
				pie: {
					customScale: 1,
					donut: {
						size: '40%'
						
					}
				}
			},
       labels: ["Ticket Left", "Ticket Sold", "Event Held"],
      colors:['#ff7a00', '#2130b8', '#21b830'],
      responsive: [
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 120,
              height: 120
            },
            legend: {
              position: "bottom",
			  show:false
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }


}
