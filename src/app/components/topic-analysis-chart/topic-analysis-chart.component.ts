/**
 * TOPIC ANALYSIS CHART
 * Shows popularity of a topic in different social media platforms over a timeline.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { topicAnalysis } from '../../domain/data/mock-topic-analysis';

declare let d3: any;

@Component({
  selector: 'app-topic-analysis-chart',
  templateUrl: './topic-analysis-chart.component.html',
  styleUrls: ['./topic-analysis-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopicAnalysisChartComponent implements OnInit {
  private options: any;
  private data = topicAnalysis;

  constructor() { }

  ngOnInit() {
    this.setupChart();
  }

  /**
   * Builds the Topic Analysis Chart by configuring nvd3 chart options
   */
  setupChart(): void {
    this.options = {
      chart: {
        type: 'lineWithFocusChart',
        height: 400,
        margin : {
          top: 30,
          right: 30,
          bottom: 40,
          left: 70
        },
        x: d => d[0],
        y: d => d[1],
        useVoronoi: false,
        clipEdge: true,
        duration: 100,
        useInteractiveGuideline: true,
        xAxis: {
          showMaxMin: false,
          tickFormat: d => d3.time.format('%x')(new Date(d)),
          axisLabel: 'Timeline'
        },
        x2Axis: {
          tickFormat: d => d3.time.format('%x')(new Date(d)),
          axisLabel: 'Timeline'
        },
        yAxis: {
          tickFormat: d => d3.format(',.0f')(d),
          axisLabel: '#Content'
        },
        zoom: {
          enabled: true,
          scaleExtent: [1, 10],
          useFixedDomain: false,
          useNiceScale: false,
          horizontalOff: false,
          verticalOff: true,
          unzoomEventType: 'dblclick.zoom'
        }
      }
    };
  }
}
