import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  trendingItems = [
    {
      sr_no: "#1",
      title: "Beautiful Fireworks Shows In The New Year 2020",
      sales: "454",
      progress_image: "assets/images/svg/up.svg",
    },
    {
      sr_no: "#2",
      title: "Jakarta Indie Music Festival 2020",
      sales: "485",
      progress_image: "assets/images/svg/down.svg",
    
    },
    {
      sr_no: "#3",
      title: "Live Choir in Sydney 2020",
      sales: "250",
      progress_image: "assets/images/svg/up.svg",
    
    },
    {
      sr_no: "#4",
      title: "Artist Performing Festival In Aus..",
      sales: "350",
      progress_image: "assets/images/svg/down.svg",
    
    },
    {
      sr_no: "#5",
      title: "[LIVE] Football Charity Event 2020",
      sales: "752",
      progress_image: "assets/images/svg/down.svg",
    
    },
  ];

}
