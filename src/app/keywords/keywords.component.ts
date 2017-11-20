import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { KEYWORDS } from '../mock-keywords';
import { SocialActivityService } from '../social-activity.service';
import { SocialActivity } from '../socialActivity';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {
  private data: any;

  keywords = KEYWORDS;

  selectedKeyword: any;

  constructor(private socialActivityService: SocialActivityService) { }

  ngOnInit() {
    this.getSocialActivity();
  }

  onSelect(keyword: any): void {
    this.selectedKeyword = this.selectedKeyword === keyword ? undefined : keyword;
    this.addSocialActivity(this.generateMockData());
  }

  getSocialActivity(): void {
    this.socialActivityService.getSocialActivity()
      .subscribe(socialActivity => this.data = socialActivity);
  }

  addSocialActivity(socialActivity: Object): void {
    this.socialActivityService.addSocialActivity(socialActivity as SocialActivity)
      .subscribe(activity => {
        this.data.push(activity);
        this.getSocialActivity();
      });
  }

  generateMockData(): Object {
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
      key: 'InteractionDesign',
      area: true
    });
  }

}
