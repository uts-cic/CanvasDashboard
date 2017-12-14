import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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
  @Input() size;

  constructor() { }

  ngOnInit() {
    this.setupChart();
    this.generateMockData();
  }

  /**
   * Configures chart options
   */
  setupChart(): void {
    this.options = {
      chart: {
        type: 'pieChart',
        height: this.size,
        margin: {
          top: 5,
          right: 0,
          bottom: 0,
          left: 0
        },
        x: d => d.key,
        y: d => d.y,
        showLabels: true,
        showLegend: false,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
      }
    };
  }

  /**
   * Generates mock data for the social reach chart
   */
  generateMockData(): void {
    this.data = [
      {
        key: 'Twitter',
        y: 65,
        color: '#1DA1F2'
      },
      {
        key: 'Facebook',
        y: 25,
        color: '#3b5998'
      },
      {
        key: 'Slack',
        y: 10,
        color: '#DB4437'
      }
    ];
  }

}