import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  recentSales = [
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "James WItcwicky",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "James WItcwicky",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "James WItcwicky",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "James WItcwicky",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "James WItcwicky",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "James WItcwicky",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
  ];

}
