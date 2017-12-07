import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare let d3: any;

@Component({
  selector: 'app-topic-analysis',
  templateUrl: './topic-analysis.component.html',
  styleUrls: ['./topic-analysis.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopicAnalysisComponent implements OnInit {
  private options: any;
  private data: any;

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

  /**
   * Generates mock data for the topic analysis chart
   */
  generateMockData(): void {
    this.data = [
      {
        'key': 'Facebook',
        'area': true,
        'color': '#3B5998',
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
        'key': 'Twitter',
        'area': true,
        'color': '#1DA1F2',
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
        'key' : 'Slack' ,
        'area': true,
        'color': '#DB4437',
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
    ];
  }

}
