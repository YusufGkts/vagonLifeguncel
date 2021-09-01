import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface order {
  order_id?: string;
  order_date: string;
  order_name: string;
  customer_name: string;
  location: string;
  order_pck: number;
  order_total_pck: string;
  refund: string;
  totle_revenue: number;
  refund_class: string;
  status: string;
}

export const ORDERS: order[] = [
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London, US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 125,
    refund_class: 'text-black',
    status: 'Tamamlandı',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Medan, Indonesia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 536,
    refund_class: 'text-black',
    status: 'Sipariş Hazırlanıyor',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'Jakarta, Indonesia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 536,
    refund_class: 'text-danger',
    status: 'Kargoya Verildi',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Sydney, Australia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 65,
    refund_class: 'text-black',
    status: 'İade Edildi',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 44,
    refund_class: 'text-black',
    status: 'Kargoya Verildi',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 51,
    refund_class: 'text-danger',
    status: 'Sipariş Hazırlanıyor',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Jakarta, Indonesia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 124,
    refund_class: 'text-danger',
    status: 'İade Edildi',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'Penang, Malaysia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 536,
    refund_class: 'text-black',
    status: 'Sipariş Hazırlanıyor',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Sydney, Australia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 65,
    refund_class: 'text-black',
    status: 'Tamamlandı',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 44,
    refund_class: 'text-black',
    status: 'Tamamlandı',
  },
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 51,
    refund_class: 'text-danger',
    status: 'Tamamlandı',
  },
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  totalRevenue: number = 0;
  filteredOrders: order[];
  searchText: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.updateOrderListing();
    this.filteredOrders = this.orders;
    console.log(this.filteredOrders);
  }

  ngOnInit(): void {
    this.orders.forEach((a) => {
      console.log(a.totle_revenue);
      this.totalRevenue = this.totalRevenue + a.totle_revenue;
    });
  }

  page = 1;
  pageSize = 100000;
  collectionSize = ORDERS.length;
  orders: order[];

  updateOrderListing() {
    this.orders = ORDERS.map((customer, i) => ({
      id: i + 1,
      ...customer,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  onKey(event) {
    if (!this.searchText) {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter((j) => {
        return j.customer_name
          .toLocaleLowerCase()
          .match(this.searchText.toLocaleLowerCase());
      });
    }
  }
}
