import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ChartComponent,
  ApexChart,
  ApexFill,
  ApexResponsive,
  ApexStroke,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  responsive: ApexResponsive[];
  stroke: ApexStroke;
  colors: string[];
  legend: ApexLegend;
};


@Component({
  selector: 'app-graph-pie',
  templateUrl: './graph-pie.component.html',
  styleUrls: ['./graph-pie.component.css']
})
export class GraphPieComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [71, 63, 90],
      chart: {
        type: 'radialBar',
        height: 350,
        offsetY: 0,
        offsetX: 0,
        sparkline: {
          enabled: true,
        },
        
      },
      plotOptions: {
        radialBar: {
          startAngle: -150,
          endAngle: 200,
          /* size: undefined, */
          inverseOrder: false,
          hollow: {
						margin: 0,
						size: '35%',
						background: 'transparent',
					},
          
          
          
          track: {
            show: true,
						background: '#e1e5ff',
						strokeWidth: '12%',
						opacity: 1,
						margin: 15, // margin is in pixels
          },
          
          
        },
      },
      responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						offsetY: 0,
						offsetX: 0
					},	
					legend: {
						position: 'bottom',
						offsetX:0,
						offsetY: 0
					}
				}
			}],	
      
      fill: {
        opacity: 1
      },
      stroke: {
        lineCap: 'round'
      },
      colors:['#2130b9', '#2130b9', '#2130b9'],
      labels: ['Ticket A', 'Ticket B', 'Ticket C'],
      legend: {
        fontSize: '14px',  
				show: true,
				position: 'bottom'
      },
    };
  }
  
  ngOnInit(): void {
  }
  
  
}
