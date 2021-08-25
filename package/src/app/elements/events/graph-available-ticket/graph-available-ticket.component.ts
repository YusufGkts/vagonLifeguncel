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
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  colors: string[];
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};



@Component({
  selector: 'app-graph-available-ticket',
  templateUrl: './graph-available-ticket.component.html',
  styleUrls: ['./graph-available-ticket.component.css']
})
export class GraphAvailableTicketComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [65, 35],
      chart: {
        height: 100,
        width: 100,
        // height: 180,
        type: "donut",
		sparkline:{
			enabled:true
		}
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
      tooltip: {
        enabled: false,
      },
      labels: ["Heart Beat", "Immunities"],
      colors:['#222fb9', '#e8eaf8'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150
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
