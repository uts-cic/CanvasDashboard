import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare let d3: any;

@Component({
  selector: 'app-social-reach-chart',
  templateUrl: './social-reach-chart.component.html',
  styleUrls: ['./social-reach-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialReachChartComponent implements OnInit {
  private options: any;
  private data: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: d => d.key,
        y: d => d.y,
        showLabels: true,
        showLegend: false,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
      }
    };

    this.data = [
      {
        key: 'Twitter',
        y: 65
      },
      {
        key: 'Facebook',
        y: 25
      },
      {
        key: 'Slack',
        y: 10
      }
    ];
  }

}
