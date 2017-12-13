import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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
  private twitterData: any;
  private facebookData: any;
  private slackData: any;
  private selected: String = 'Facebook';
  @Input() size;

  constructor() { }

  ngOnInit() {
    this.setupChart();
    this.generateMockData();
  }

  /**
   * Shows data based on selected filter
   * @param selection selected filter
   */
  onSelect(selection: string): void {
    switch (selection) {
      case 'Twitter':
        this.data = this.twitterData;
        break;
      case 'Facebook':
        this.data = this.facebookData;
        break;
      case 'Slack':
        this.data = this.slackData;
        break;
      default:
        break;
    }
  }

  /**
   * Configure chart options
   */
  setupChart() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: this.size,
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        donut: true,
        x: d => d.key,
        y: d => d.y,
        showLabels: true,
        showLegend: false,
        duration: 500,
      }
    };
  }

  /**
   * Generates mock data for engagement chart
   */
  generateMockData(): void {
    this.twitterData = [
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

    this.facebookData = [
      {
        key: 'Facebook',
        y: 45,
        color: '#3B5998'
      },
      {
        key: '',
        y: 55,
        color: '#CCCCCC'
      }
    ];

    this.slackData = [
      {
        key: 'Slack',
        y: 65,
        color: '#DB4437'
      },
      {
        key: '',
        y: 35,
        color: '#CCCCCC'
      }
    ];

    this.data = this.facebookData;
  }

}
