import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  public isShowSocialActivity = true;
  public isShowNetworkAnalysis = true;
  public isShowTwitterTopicAnalysis = false;
  public isSocialActivityDisabled = false;
  public isNetworkAnalysisDisabled = false;
  public isTwitterTopicAnalysisDisabled = true;
  public occupiedSpace = 0;

  constructor() { }

  ngOnInit() {
    this.calculateOccupiedSpace();
    this.setDisabledBtn();
  }

  calculateOccupiedSpace(): void {
    if (this.isShowSocialActivity) { this.occupiedSpace += 3; }
    if (this.isShowNetworkAnalysis) { this.occupiedSpace += 3; }
    if (this.isShowTwitterTopicAnalysis) { this.occupiedSpace += 3; }
  }

  setDisabledBtn(): void {
    this.isSocialActivityDisabled = !this.isShowSocialActivity && this.occupiedSpace >= 6 ? true : false;
    this.isNetworkAnalysisDisabled = !this.isShowNetworkAnalysis && this.occupiedSpace >= 6 ? true : false;
    this.isTwitterTopicAnalysisDisabled = !this.isShowTwitterTopicAnalysis && this.occupiedSpace >= 6 ? true : false;
  }

  onSelect(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.isShowSocialActivity = !this.isShowSocialActivity;
        this.isShowSocialActivity ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      case 'networkAnalysis':
        this.isShowNetworkAnalysis = !this.isShowNetworkAnalysis;
        this.isShowNetworkAnalysis ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      case 'twitterTopicAnalysis':
        this.isShowTwitterTopicAnalysis = !this.isShowTwitterTopicAnalysis;
        this.isShowTwitterTopicAnalysis ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      default:
        break;
    }
  }

}
