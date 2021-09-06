import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';

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
  customer_phone: string;
  status_name: string;
}

export const ORDERS: order[] = [
  {
    order_id: '#0012451',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum consequatur tenetur corrupti illum repudiandae numquam sapiente nostrum obcaecati. Consectetur.',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 125,
    refund_class: 'text-black',
    status: '2',
    customer_phone: '05061805451',
    status_name: 'Tamamlandı',
  },
  {
    order_id: '#001234',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Medan, Indonesia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 536,
    refund_class: 'text-black',
    status: '5',
    customer_phone: '05061805451',
    status_name: 'İade Alındı',
  },
  {
    order_id: '#004564',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'Jakarta, Indonesia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 536,
    refund_class: 'text-danger',
    status: '3',
    customer_phone: '05061805451',
    status_name: 'Sipariş Hazırlanıyor',
  },
  {
    order_id: '#005688',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Sydney, Australia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 65,
    refund_class: 'text-black',
    status: '2',
    customer_phone: '05061805451',
    status_name: 'Tamamlandı',
  },
  {
    order_id: '#003466',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 44,
    refund_class: 'text-black',
    status: '3',
    customer_phone: '05061805451',
    status_name: 'Sipariş Hazırlanıyor',
  },
  {
    order_id: '#0012613',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 51,
    refund_class: 'text-danger',
    status: '3',
    customer_phone: '05061805451',
    status_name: 'Sipariş Hazırlanıyor',
  },
  {
    order_id: '#0066472',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Jakarta, Indonesia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 124,
    refund_class: 'text-danger',
    status: '4',
    customer_phone: '05061805451',
    status_name: 'Kargoya Verildi',
  },
  {
    order_id: '#63457345',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'Penang, Malaysia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 536,
    refund_class: 'text-black',
    status: '4',
    customer_phone: '05061805451',
    status_name: 'Kargoya Verildi',
  },
  {
    order_id: '#0045725',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Kevin Hurt',
    location: 'Sydney, Australia',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 65,
    refund_class: 'text-black',
    status: '2',
    customer_phone: '05061805451',
    status_name: 'Tamamlandı',
  },
  {
    order_id: '#00234562',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'NO',
    totle_revenue: 44,
    refund_class: 'text-black',
    status: '5',
    customer_phone: '05061805451',
    status_name: 'İade Alındı',
  },
  {
    order_id: '#00734526',
    order_date: '04/08/2020 12:34 AM',
    order_name: 'The Story Of Danaou Taba (Musical Drama)',
    customer_name: 'Bella Simatupang',
    location: 'London,US',
    order_pck: 1,
    order_total_pck: '567k left',
    refund: 'Refund',
    totle_revenue: 51,
    refund_class: 'text-danger',
    status: '2',
    customer_phone: '05061805451',
    status_name: 'Tamamlandı',
  },
];
var event: Event;
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  totalRevenue: number = 0;
  filteredOrders: order[];
  searchText: string;
  isClicked: number;
  options = [
    { name: 'Tüm Durumlar', id: 1 },
    { name: 'Tamamlandı', id: 2 },
    { name: 'Sipariş Hazırlanıyor', id: 3 },
    { name: 'Kargoya Verildi', id: 4 },
    { name: 'İade Alındı', id: 5 },
  ];
  selected: any = '1';
  selectedData: order[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.selectedData = this.orders;
    this.updateOrderListing();
    this.filteredOrders = this.orders;
    this.isClicked = null;
    if (this.selected == '1') {
      this.selectedData = this.orders;
    }
  }

  ngOnInit(): void {
    this.orders.forEach((a) => {
      this.totalRevenue = this.totalRevenue + a.totle_revenue;
    });
  }
  onSelect(args) {
    if (args == '1') {
      this.selectedData = this.orders;
    } else {
      this.selectedData = this.orders.filter((x) => x.status == args);
    }
  }

  openDetails(args) {
    this.isClicked = args;
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

  onKey() {
    if (!this.searchText) {
      this.selectedData = this.orders;
    } else {
      this.selectedData = this.orders.filter((order) => {
        return (
          order.customer_name
            .toLocaleLowerCase()
            .match(this.searchText.toLocaleLowerCase()) ||
          order.order_id.match(this.searchText) ||
          order.order_name
            .toLocaleLowerCase()
            .match(this.searchText.toLocaleLowerCase())
        );
      });
    }
  }
}
