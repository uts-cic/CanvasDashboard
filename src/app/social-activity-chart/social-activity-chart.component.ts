import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 40,
            left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        dispatch: {
            stateChange: function(e){ console.log('stateChange'); },
            changeState: function(e){ console.log('changeState'); },
            tooltipShow: function(e){ console.log('tooltipShow'); },
            tooltipHide: function(e){ console.log('tooltipHide'); }
        },
        xAxis: {
            axisLabel: 'Timeline'
        },
        yAxis: {
            axisLabel: 'Activities',
            axisLabelDistance: -10
        },
      }
    };

    this.data = sinAndCos();

    function sinAndCos() {
      const sin = [], cos = [], cos2 = [];

      for (let i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.round(Math.abs(Math.sin(i / 10) * 2) * 35)});
        cos.push({x: i, y: Math.round(Math.abs(Math.cos(i / 10 + 2) + Math.random() / 10) * 50)});
        cos2.push({x: i, y: Math.round(Math.abs(Math.cos(i / 10 + 2) + Math.random() / 10) * 30)});
      }

      return [
        {
          values: sin,
          key: 'Facebook',
          color: '#3b5998'
        },
        {
          values: cos,
          key: 'Twitter',
          color: '#1DA1F2'
        },
        {
          values: cos2,
          key: 'Slack',
          color: '#DB4437'
        },
      ];
    }
  }
}
