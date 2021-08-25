import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-graph-sales-summary',
  templateUrl: './graph-sales-summary.component.html',
  styleUrls: ['./graph-sales-summary.component.css']
})
export class GraphSalesSummaryComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [42, 47, 52, 58],
      chart: {
        width: 250,
				type: 'polarArea',
				sparkline: {
					enabled: true,
        },
      },
      labels: ['VIP', 'Reguler', 'Exclusive', 'Economic'],
      fill: {
				opacity: 1,
				colors: ['#2130b8', '#21b830', '#ff7a00', '#ffe600']
      },
      stroke: {
        width: 0,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 0
          }
        }
      },
      theme: {
        monochrome: {
					enabled: true,
					shadeTo: 'light',
					shadeIntensity: 0.6
        }
      }
    };
  }
  
  ngOnInit(): void {
  }
  
}
