import { Component, OnInit } from '@angular/core';

export interface payments {
  payment_id: string;
  payment_name: string;
  payment_type: string;
  payment_date: string;
  payment_total: number;
  payment_company: string;
  payment_status: string;
}
export const payment: payments[] = [
  {
    payment_id: '#0001',
    payment_name: 'Cive Saluve',
    payment_type: 'Kredi Kartı',
    payment_date: '20/08/2021',
    payment_total: 150,
    payment_company: 'Ziraat Bankası',
    payment_status: 'Tamamlandı',
  },
  {
    payment_id: '#0001',
    payment_name: 'Bella Simatupang',
    payment_type: 'Havale',
    payment_date: '20/08/2021',
    payment_total: 200,
    payment_company: 'Garanti Bankası',
    payment_status: 'Onay Bekliyor',
  },
  {
    payment_id: '#0001',
    payment_name: 'Kevin Hurt',
    payment_type: 'Havale',
    payment_date: '20/08/2021',
    payment_total: 200,
    payment_company: 'Ziraat Bankası',
    payment_status: 'Onay Bekliyor',
  },
  {
    payment_id: '#0001',
    payment_name: 'Bella Simatupang',
    payment_type: 'Kredi Kartı',
    payment_date: '20/08/2021',
    payment_total: 200,
    payment_company: 'Garanti Bankası',
    payment_status: 'Onay Bekliyor',
  },
  {
    payment_id: '#0001',
    payment_name: 'Kevin Hurt',
    payment_type: 'Havale',
    payment_date: '20/08/2021',
    payment_total: 20,
    payment_company: 'Ziraat Bankası',
    payment_status: 'Onay Bekliyor',
  },
];
@Component({
  selector: 'payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
