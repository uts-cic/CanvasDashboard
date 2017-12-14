/**
 * SOCIAL ACTIVITY CHART
 * Shows amount of social media activities over a timeline.
 * Focus chart below the main chart can be used to zoom in, out, and to navigate along the timeline.
 */
import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { SocialActivityService } from '../../domain/services/social-activity/social-activity.service';
import { SocialActivity } from '../../domain/models/socialActivity';

declare let d3: any;

@Component({
  selector: 'app-social-activity-chart',
  templateUrl: './social-activity-chart.component.html',
  styleUrls: ['./social-activity-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialActivityChartComponent implements OnInit {
  private options: any;
  private data: any;
  public isShow = false;
  @ViewChild('nvd3') nvd3;
  @Input() height; // Gets chart size from its parent component

  constructor(private socialActivityService: SocialActivityService) { }

  ngOnInit() {
    this.setupChart();
    this.getSocialActivity();
  }

  /**
   * Builds the social activity chart by configuring nvd3 chart options
   */
  setupChart(): void {
    this.options = {
      chart: {
        type: 'lineWithFocusChart',
        height: this.height,
        margin : {
          top: 20,
          right: 30,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          showMaxMin: false,
          axisLabel: 'Timeline',
          tickFormat: d => d3.time.format('%x')(new Date(d)),
        },
        x2Axis: {
          tickFormat: d => d3.time.format('%x')(new Date(d)),
        },
        yAxis: {
          axisLabel: 'Activities',
          axisLabelDistance: -10
        },
      }
    };
  }

  /**
   * Gets social activity from the service
   */
  getSocialActivity(): void {
    this.socialActivityService.getSocialActivity()
      .subscribe(socialActivity => this.data = socialActivity);
  }
}
