import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  plotOptions?: ApexPlotOptions | any;
  yaxis?: ApexYAxis | any;
  xaxis?: ApexXAxis | any;
  fill?: ApexFill | any;
  tooltip?: ApexTooltip | any;
  stroke?: ApexStroke | any;
  legend?: ApexLegend | any;
  colors?: string[] | any;
  responsive?: ApexResponsive[] | any;
  grid?: ApexGrid | any;
  toolbar?: any;
};


@Component({
  selector: 'app-graph-ticket-sold',
  templateUrl: './graph-ticket-sold.component.html',
  styleUrls: ['./graph-ticket-sold.component.css']
})
export class GraphTicketSoldComponent implements OnInit {
  
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Expense',
          data: [40, 60, 20, 45, 70, 35, 40, 75, 45, 30, 55, 65, 20]
        },
        {
          name: 'Earning',
          data: [20, 35, 40, 60,  35, 16, 60, 45, 60, 45, 20, 35, 55]
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      plotOptions: {
			bar: {
				horizontal: false,
				endingShape: "rounded",
				startingShape: "rounded",
				backgroundRadius: 10,
				columnWidth: '30%',
				colors: {
					backgroundBarColors: ['#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC'],
					backgroundBarOpacity: 1,
					backgroundBarRadius: 10,
				},
			},
			
	  },
	  colors:[ '#707070', '#222fb9'],
      xaxis: {
			show: true,
			axisBorder: {
				show: false,
			},
			 axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: '#828282',
					fontSize: '14px',
					fontFamily: 'Poppins',
					fontWeight: 'light',
					cssClass: 'apexcharts-xaxis-label',
				},
			},
			crosshairs: {
				show: false,
			},
			
			categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
		},
		yaxis: {
			show: false
		},
		grid: {
			show: false,
		},
		toolbar: {
			enabled: false,
		},
		dataLabels: {
		  enabled: false
		},
		legend: {
			show:false
		},
		fill: {
			opacity: 1
		},
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          },
          chart: {
            height: 250,
          }
        }
      }],
    };
  }
  
  ngOnInit(): void {
  }
  
}
