import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { KEYWORDS } from '../mock-keywords';

declare let d3: any;

@Component({
  selector: 'app-twitter-topic-chart',
  templateUrl: './twitter-topic-chart.component.html',
  styleUrls: ['./twitter-topic-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TwitterTopicChartComponent implements OnInit {
  private options: any;
  private data: any;
  private keywords: any;

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

  constructor() { }

  ngOnInit() {
    this.keywords = KEYWORDS;
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 30,
          right: 30,
          bottom: 40,
          left: 60
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

    this.data = [
      {
        'key': 'Original',
        'area': true,
        'values': [
          [ 1025409600000, 23 ],
          [ 1028088000000, 19 ],
          [ 1030766400000, 21 ],
          [ 1033358400000, 22 ],
          [ 1036040400000, 25 ],
          [ 1038632400000, 26 ],
          [ 1041310800000, 19 ],
          [ 1043989200000, 19 ],
          [ 1046408400000, 19 ],
          [ 1049086800000, 21 ],
          [ 1051675200000, 24 ],
          [ 1054353600000, 24 ],
          [ 1056945600000, 23 ],
          [ 1059624000000, 23 ],
          [ 1062302400000, 24 ],
          [ 1064894400000, 24 ],
          [ 1067576400000, 27 ],
          [ 1070168400000, 26 ],
          [ 1072846800000, 26 ],
          [ 1075525200000, 27 ],
        ]
      },

      {
        'key': 'Retweets',
        'area': true,
        'values': [
          [ 1025409600000, 15 ],
          [ 1028088000000, 17 ],
          [ 1030766400000, 10 ],
          [ 1033358400000, 12 ],
          [ 1036040400000, 11 ],
          [ 1038632400000, 10 ],
          [ 1041310800000, 13 ],
          [ 1043989200000, 17 ],
          [ 1046408400000, 14 ],
          [ 1049086800000, 10 ],
          [ 1051675200000, 12 ],
          [ 1054353600000, 17 ],
          [ 1056945600000, 15 ],
          [ 1059624000000, 10 ],
          [ 1062302400000, 12 ],
          [ 1064894400000, 10 ],
          [ 1067576400000, 15 ],
          [ 1070168400000, 20 ],
          [ 1072846800000, 14 ],
          [ 1075525200000, 15 ],
        ]
      },

      {
        'key' : 'Replies' ,
        'area': true,
        'values': [
          [ 1025409600000, 7 ],
          [ 1028088000000, 7 ],
          [ 1030766400000, 7 ],
          [ 1033358400000, 8 ],
          [ 1036040400000, 9 ],
          [ 1038632400000, 9 ],
          [ 1041310800000, 10 ],
          [ 1043989200000, 10 ],
          [ 1046408400000, 10 ],
          [ 1049086800000, 8 ],
          [ 1051675200000, 9 ],
          [ 1054353600000, 8 ],
          [ 1056945600000, 8 ],
          [ 1059624000000, 8 ],
          [ 1062302400000, 7 ],
          [ 1064894400000, 7 ],
          [ 1067576400000, 8 ],
          [ 1070168400000, 8 ],
          [ 1072846800000, 9 ],
          [ 1075525200000, 9 ],
        ]
      },

      {
        'key': 'Friends',
        'area': true,
        'values': [
          [ 1025409600000, 9 ],
          [ 1028088000000, 8 ],
          [ 1030766400000, 8 ],
          [ 1033358400000, 8 ],
          [ 1036040400000, 10 ],
          [ 1038632400000, 12 ],
          [ 1041310800000, 10 ],
          [ 1043989200000, 11 ],
          [ 1046408400000, 11 ],
          [ 1049086800000, 10 ],
          [ 1051675200000, 11 ],
          [ 1054353600000, 12 ],
          [ 1056945600000, 8 ],
          [ 1059624000000, 8 ],
          [ 1062302400000, 8 ],
          [ 1064894400000, 7 ],
          [ 1067576400000, 9 ],
          [ 1070168400000, 9 ],
          [ 1072846800000, 10 ],
          [ 1075525200000, 10 ],
        ]
      },
    ];
  }
}
