import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-sales',
  templateUrl: './latest-sales.component.html',
  styleUrls: ['./latest-sales.component.css'],
})
export class LatestSalesComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
