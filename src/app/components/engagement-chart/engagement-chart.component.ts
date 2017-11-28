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
  private twitterData: any;
  private facebookData: any;
  private slackData: any;
  private selected: String = 'Facebook';

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 250,
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

  onSelect(val) {
    switch (val) {
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

}
