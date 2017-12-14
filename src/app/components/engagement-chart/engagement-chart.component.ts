/**
 * ENGAGEMENT CHART
 * Engagement levels on each social media platform.
 */
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { twitterData, facebookData, slackData } from '../../domain/data/mock-engagement';

declare let d3: any;

@Component({
  selector: 'app-engagement-chart',
  templateUrl: './engagement-chart.component.html',
  styleUrls: ['./engagement-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EngagementChartComponent implements OnInit {
  private options: any;
  private data = facebookData;
  private twitterData = twitterData;
  private facebookData = facebookData;
  private slackData = slackData;
  private selected: String = 'Facebook';
  @Input() height;

  constructor() { }

  ngOnInit() {
    this.setupChart();
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
   * Builds engagement chart by configuring nvd3 chart options
   */
  setupChart() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: this.height,
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
}
