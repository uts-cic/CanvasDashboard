import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { SOCIAL_ACTIVITY } from '../mock-social-activity';
import { SocialActivityService } from '../social-activity.service';

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

  constructor(private socialAtivityService: SocialActivityService) { }

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
          showMaxMin: false,
          axisLabel: 'Timeline',
          tickFormat: d => d3.time.format('%x')(new Date(d)),
        },
        yAxis: {
          axisLabel: 'Activities',
          axisLabelDistance: -10
        },
      }
    };

    this.getSocialActivity();
  }

  toggleShow() {
    this.isShow = !this.isShow;

    if (this.isShow) {
      const newData = [];
      const dates = [
        1025409600000,
        1028088000000,
        1030766400000,
        1033358400000,
        1036040400000,
        1038632400000,
        1041310800000,
        1043989200000,
        1046408400000,
        1049086800000,
        1051675200000,
        1054353600000,
        1056945600000,
        1059624000000,
        1062302400000,
        1064894400000,
        1067576400000,
        1070168400000,
        1072846800000,
        1075525200000
      ];
      for (let i = 0; i < dates.length; i++) {
        newData.push({x: dates[i], y: Math.round(Math.abs(Math.cos(i / 10 + 2) + Math.random() / 10) * 10)});
      }
      this.data.push({
        values: newData,
        key: 'InteractionDesign',
        area: true
      });
    } else {
      this.data.splice(3, 1);
    }

    this.nvd3.chart.update();
  }

  getSocialActivity(): void {
    this.data = this.socialAtivityService.getSocialActivity();
    this.socialAtivityService.getSocialActivity()
      .subscribe(socialActivity => this.data = socialActivity);
  }
}
