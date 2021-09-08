import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { order, ORDERS } from 'src/app/order-list/order-list.component';
import { payments, payment } from 'src/app/payments/payment.component';

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
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.allOrders = ORDERS;
    this.customerPayments = payment;
  }

  openDialog() {
    const dialogRef = this.dialog.open(_ProfileDialog);

    dialogRef.afterClosed().subscribe((result) => {});
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

  open(modelId: any) {
    this.modalService.open(modelId);
  }
}

@Component({
  selector: 'profile-dialog',
  templateUrl: 'profile-dialog.html',
})
export class _ProfileDialog {}
