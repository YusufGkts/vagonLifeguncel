import { Component, OnInit, ViewChild } from '@angular/core';

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
  ApexMarkers, 
  ApexGrid, 
  ApexStates, 
  ApexFill,
  ApexTooltip
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
  markers?: ApexMarkers | any;
  grid?: ApexGrid | any;
  states?: ApexStates | any;
  fill?: ApexFill | any;
  tooltip?: ApexTooltip | any;
};


@Component({
  selector: 'app-graph-increment',
  templateUrl: './graph-increment.component.html',
  styleUrls: ['./graph-increment.component.css']
})
export class GraphIncrementComponent implements OnInit {
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [0,2,1,4],
        }
      ],
      chart: {
        type: "area",
        height: 50,
        width: 100,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      colors:['#222fb9'],
      dataLabels: {
        enabled: false,
      },
      markers: {
        shape: "circle",
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 3,
        curve:'straight',
        colors:['#222fb9'],
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
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      xaxis: {
        categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            fontSize: '12px',
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: false,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
          }
        }
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
        colors:['#222fb9']
      },
      tooltip: {
          enabled: false,
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function(val) {
            return "$" + val + " thousands"
          }
        }
      }
      
    };
  }
  
  ngOnInit(): void {
  }
}
