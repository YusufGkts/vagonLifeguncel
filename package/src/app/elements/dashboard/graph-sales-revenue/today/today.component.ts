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
} from 'ng-apexcharts';

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
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    // console.log(this.data);
    // alert(this.data + "test");
    this.chartOptions = {
      series: [
        {
          data: [20, 35, 70, 45, 40, 35, 30, 35, 10, 40, 60, 20],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      colors: ['#222fb9'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 4,
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '00.00',
          '01.00',
          '02.00',
          '03.00',
          '04.00',
          '05.00',
          '06.00',
          '07.00',
          '08.00',
          '09.00',
          '10.00',
          '11.00',
          '12.00',
          '13.00',
          '14.00',
          '15.00',
          '16.00',
          '17.00',
          '18.00',
          '19.00',
          '20.00',
          '21.00',
          '22.00',
          '23.00',
          '24.00',
        ],
        labels: {
          style: {
            colors: '#2130b8',
            // fontSize: '13px',
            // fontFamily: 'Poppins',
            // fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#787878',
            fontSize: '13px',
            fontFamily: 'Poppins',
            /* fontWeight: 400 */
          },
          formatter: function (value: any) {
            return value;
          },
        },
      },
      /* fill:{
        opacity:0.2,
        type:'solid'
      }, */
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }

  ngOnInit(): void {}
}
