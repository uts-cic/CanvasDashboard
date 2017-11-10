import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare let d3: any;

@Component({
  selector: 'app-engagement-chart',
  templateUrl: './engagement-chart.component.html',
  styleUrls: ['./engagement-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EngagementChartComponent implements OnInit {
  private options: any;
  private data: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 400,
        donut: true,
        x: d => d.key,
        y: d => d.y,
        showLabels: true,
        showLegend: false,
        duration: 500,
      }
    };

    this.data = [
      {
        key: 'Twitter',
        y: 35,
        color: '#1DA1F2'
      },
      {
        key: '',
        y: 70,
        color: '#CCCCCC'
      }
    ];
  }

}
