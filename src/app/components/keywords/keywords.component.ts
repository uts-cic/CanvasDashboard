/**
 * KEYWORDS COMPONENT
 * Rank of keywords being used the most by the user and the amount of times being used.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { keywords } from '../../domain/data/mock-keywords';
import { SocialActivityService } from '../../domain/services/social-activity/social-activity.service';
import { SocialActivity } from '../../domain/models/socialActivity';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {
  private data: any;
  keywords = keywords;
  selectedKeyword: any;

  constructor(private socialActivityService: SocialActivityService) { }

  ngOnInit() {
  }

  /**
   * Adds keyword data to social activity chart when a keyword is selected
   * @param keyword selected keyword
   */
  onSelect(keyword: any): void {
    this.selectedKeyword = this.selectedKeyword === keyword ? undefined : keyword;
    this.addSocialActivity(this.generateMockData(keyword.word));
  }

  /**
   * Adds a new social activity data
   * @param socialActivity new social activity data
   */
  addSocialActivity(socialActivity: Object): void {
    this.socialActivityService.addSocialActivity(socialActivity as SocialActivity)
      .subscribe(activity => {
        this.data.push(activity);
      });
  }

  /**
   * Generates mock keyword activity data to show the activity level of the keyword in the Social Activity Chart.
   * Currently still needs re-rendering of page for the new data to be shown in the Social Activity Chart.
   */
  generateMockData(keyword: any): Object {
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
    return({
      values: newData,
      key: keyword,
      area: true
    });
  }

}
