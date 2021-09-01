import { Component, OnInit } from '@angular/core';
import { order, ORDERS } from 'src/app/order-list/order-list.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderInformations: order[];
  levelNum:number;
  levels:Array<Object> = [
      {num: 0, name: "AA"},
      {num: 1, name: "BB"}
  ];

  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  selectedLevel = this.levels[0];

  selectedLevelCustomCompare = {num: 1, name: "BB"}

  compareFn(a, b) {
    console.log(a, b, a && b && a.num == b.num);
    return a && b && a.num == b.num;
  }
 

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
