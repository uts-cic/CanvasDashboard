/**
 * TWITTER TOPIC CHART
 * Shows popularity of a topic in different Tweet categories (replies, retweet, etc.) over a Timeline.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { keywords } from '../../domain/data/mock-keywords';
import { twitterTopic } from '../../domain/data/mock-twitter-topic';

declare let d3: any;

@Component({
  selector: 'app-twitter-topic-chart',
  templateUrl: './twitter-topic-chart.component.html',
  styleUrls: ['./twitter-topic-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TwitterTopicChartComponent implements OnInit {
  private options: any;
  private data = twitterTopic;
  private keywords = keywords;

  constructor() { }

  ngOnInit() {
    this.setupChart();
  }

  /**
   * Provides search suggestions from mock keywords for the twitter topic chart search bar
   * @param text$ text typed on search bar
   */
  search = (text$: Observable<string>) => {
    const result = text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? [] :
          this.keywords.filter(v => v.word.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
            .map(keyword => keyword.word)
      );
    return result;
  }

  /**
   * Builds the Twitter Topic Chart by configuring nvd3 chart options
   */
  setupChart(): void {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 250,
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
