import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from '../shared.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  
  model: NgbDateStruct;
  date: {year: number, month: number};
  
  
  constructor( private calendar: NgbCalendar, public sharedService: SharedService) {
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.sharedService.dashboardEventClass();
  }
  ngOnDestroy(): void {
      this.sharedService.toggleEventClass();
      
  }
  
  
  latestSales = [
    {
      image: "assets/images/avatar/1.jpg",
      user: "Olivia Johnson",
      title: "Height Performance conert 2020",
      time: "2m ago",
    },
    {
      image: "assets/images/avatar/2.jpg",
      user: "Griezerman",
      title: "Fireworks Show New Year 2020",
      time: "5m ago",
    },
    {
      image: "assets/images/avatar/3.jpg",
      user: "Uli Trumb",
      title: "Height Performance conert 2020",
      time: "8m ago",
    },
    {
      image: "assets/images/avatar/4.jpg",
      user: "Oconner",
      title: "Fireworks Show New Year 2020",
      time: "12m ago",
    },
  ];
  
  
}
