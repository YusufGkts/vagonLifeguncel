import { Component, OnInit } from '@angular/core';

interface order {
  order_id?: string;
  order_date: string;
  event_name: string;
  customer_name: string;
  location: string;
  sold_ticket: string;
  available: string;
  refund: string;
  totle_revenue: string;
  refund_class: string;
}


const ORDERS: order[] = [
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "London, US",
    sold_ticket: "1 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$125,70",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "Medan, Indonesia",
    sold_ticket: "2 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$536,00",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "Jakarta, Indonesia",
    sold_ticket: "3 pcs",
    available: "567k left",
    refund: "Refund",
    totle_revenue: "$536,00",
    refund_class:"text-danger",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "Sydney, Australia",
    sold_ticket: "1 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$65,22",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "London,US",
    sold_ticket: "5 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$44,00",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "London,US",
    sold_ticket: "6 pcs",
    available: "567k left",
    refund: "Refund",
    totle_revenue: "$51,50",
    refund_class:"text-danger",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "Jakarta, Indonesia",
    sold_ticket: "3 pcs",
    available: "567k left",
    refund: "Refund",
    totle_revenue: "$124,55",
    refund_class:"text-danger",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "Penang, Malaysia",
    sold_ticket: "4 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$536,00",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "Sydney, Australia",
    sold_ticket: "1 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$65,22",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "London,US",
    sold_ticket: "5 pcs",
    available: "567k left",
    refund: "NO",
    totle_revenue: "$44,00",
    refund_class:"text-black",
  },
  {
    order_id: "#0012451",
    order_date: "04/08/2020 12:34 AM",
    event_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: "Bella Simatupang",
    location: "London,US",
    sold_ticket: "5 pcs",
    available: "567k left",
    refund: "Refund",
    totle_revenue: "$51,50",
    refund_class:"text-danger",
  },
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {




  constructor() {
		
		this.updateOrderListing();
 
  }

  ngOnInit(): void {
  }
   
    
    
  page = 1;
  pageSize = 10;
  collectionSize = ORDERS.length;
  orders: order[];
  
  updateOrderListing() {
    this.orders = ORDERS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  
}
