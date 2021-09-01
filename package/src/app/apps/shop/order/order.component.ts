import { Component, OnInit } from '@angular/core';
import { order, ORDERS } from 'src/app/order-list/order-list.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderInformations: order[];

  constructor() {
    this.orderInformations = ORDERS;
    console.log(this.orderInformations);
  }

  ngOnInit(): void {}

  checkUncheckAll(event: any) {
    var checkboxes = document.getElementsByTagName('input');
    if (event.target.checked) {
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = true;
        }
      }
    } else {
      for (var i = 0; i < checkboxes.length; i++) {
        // console.log(i)
        if (checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = false;
        }
      }
    }
  }
}
