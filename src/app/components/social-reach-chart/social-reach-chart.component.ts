/**
 * SOCIAL REACH CHART
 * Shows reach levels on each social media platform
 */
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { socialReach } from '../../domain/data/mock-social-reach';

declare let d3: any;

@Component({
  selector: 'app-social-reach-chart',
  templateUrl: './social-reach-chart.component.html',
  styleUrls: ['./social-reach-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialReachChartComponent implements OnInit {
  private options: any;
  private data = socialReach;
  @Input() height;

  constructor() { }

  ngOnInit() {
    this.setupChart();
  }

  /**
   * Builds the social reach chart by configuring nvd3 chart options
   */
  setupChart(): void {
    this.options = {
      chart: {
        type: 'pieChart',
        height: this.height,
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
}
