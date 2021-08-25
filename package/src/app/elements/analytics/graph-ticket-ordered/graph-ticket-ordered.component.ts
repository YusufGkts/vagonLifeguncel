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
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
  grid?: ApexGrid | any;
};


@Component({
  selector: 'app-graph-ticket-ordered',
  templateUrl: './graph-ticket-ordered.component.html',
  styleUrls: ['./graph-ticket-ordered.component.css']
})
export class GraphTicketOrderedComponent implements OnInit {
  
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [{
        name: 'My First dataset',
        data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35]
      }],
      chart: {
        type: "bar",
        height: 125,
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '47%',
          // endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
      },
      legend: {
        show: false,
        fontSize: '12px',
        markers: {
          width: 20,
          height: 20
        },
        itemMargin: {
				  horizontal: 10,
				  vertical: 10
          },
      },
      grid: {
        show:false,
      },
      xaxis: {
        categories: [ 'jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','nov','dec'],
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
          offsetX: -15,
					style: {
          colors: '#787878',
          fontSize: '13px',
          fontFamily: 'Poppins',
          fontWeight: 400
          
          },
        } 
      },
      colors:['#222fb9'],
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val:any) {
            return val
          }
        }
      },
      responsive: [{
        breakpoint: 575,
        options: {
          series: [{
            name: 'My First dataset',
            data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35]
          }],
          chart: {
            height: 100,
          },
          plotOptions: {
            bar: {
              columnWidth: '65%'
            },
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          },
        },
      }]
    };
  }
  
  
  
  ngOnInit(): void {
  }
  
}
