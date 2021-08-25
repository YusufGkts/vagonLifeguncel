import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis?: ApexXAxis | any;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors: string[];
  grid?: ApexGrid | any;
};


@Component({
  selector: 'app-graph-sales-comparison',
  templateUrl: './graph-sales-comparison.component.html',
  styleUrls: ['./graph-sales-comparison.component.css']
})
export class GraphSalesComparisonComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Expense",
          data: [20, 14, 18, 25, 27, 22, 12, 24,20, 14, 18, 16]
        },
        {
          name: "Earning",
          data: [12, 18,14,7,5,10,20,8, 12, 18,14, 16]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        // stackType: "100%"
		sparkline:{
			enabled:false
		}
      },
      colors: ["#ffe600", "#e56e01"],
	xaxis: {
		show:true,
        categories: [ 'jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','nov','dec'],
        axisTicks: {
          show: false
        },
        labels: {
          show:true,
		  style: {
			  colors: '#fff',
			  fontSize: '13px',
			  fontFamily: 'Poppins',
				fontWeight: 400
          
          },
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
	  dataLabels:{
        enabled: false,
	  }
	  ,
	  grid:{
        show: false,
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
      fill: {
        opacity: 1
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
    };
  }

  ngOnInit(): void {
  }

}
