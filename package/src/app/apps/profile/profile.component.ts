import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/customer-list/customer-list.component';
import { order, ORDERS } from 'src/app/order-list/order-list.component';
import { payments, payment } from 'src/app/payments/payment.component';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  customerDetail: any;
  allOrders: order[];
  customerOrders: any = [];
  orderName: any;
  customerPayments: payments[];
  customerPayment: any = [];
  totalPayment: number = 0;
  allPayments: number = 0;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.allOrders = ORDERS;
    this.customerPayments = payment;
  }

  ngOnInit(): void {
    this.customerDetail = history.state.data.customerDetail;
    console.log(this.allOrders);

    this.allOrders.filter((m: any) => {
      if (m.customer_name == this.customerDetail.customer_name) {
        this.customerOrders.push(m);
      }
    });
    this.customerPayments.filter((x: any) => {
      if (x.payment_name == this.customerDetail.customer_name) {
        this.customerPayment.push(x);
      }
      console.log(this.customerPayment);
    });

    this.customerOrders.forEach((a) => {
      console.log(a.totle_revenue);
      this.totalPayment = this.totalPayment + a.totle_revenue;
    });

    this.customerPayment.forEach((j) => {
      this.allPayments = this.allPayments + j.payment_total;
    });
  }

  news = [
    {
      image: 'assets/images/profile/5.jpg',
      title: 'Collection of textile samples',
      description:
        'I shared this on my fb wall a few months back, and I thought.',
      url: 'admin/post-details',
    },
    {
      image: 'assets/images/profile/6.jpg',
      title: 'Collection of textile samples',
      description:
        'I shared this on my fb wall a few months back, and I thought.',
      url: 'admin/post-details',
    },
    {
      image: 'assets/images/profile/7.jpg',
      title: 'Collection of textile samples',
      description:
        'I shared this on my fb wall a few months back, and I thought.',
      url: 'admin/post-details',
    },
  ];

  open(modelId: any) {
    this.modalService.open(modelId);
  }
}
