import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Stocks } from '../mock-stocks';

@Component({
  selector: 'app-social-activity-chart',
  templateUrl: './social-activity-chart.component.html',
  styleUrls: ['./social-activity-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialActivityChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
