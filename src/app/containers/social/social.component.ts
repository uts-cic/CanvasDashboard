import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  public socialActivityGroup = true;
  public networkAnalysisGroup = true;
  public twitterTopicAnalysis = false;
  public socialActivityDisabled = false;
  public networkAnalysisDisabled = false;
  public twitterTopicAnalysisDisabled = true;
  public occupiedSpace = 0;

  constructor() { }

  ngOnInit() {
    this.calculateOccupiedSpace();
    this.setDisabledBtn();
  }

  calculateOccupiedSpace(): void {
    if (this.socialActivityGroup) { this.occupiedSpace += 3; }
    if (this.networkAnalysisGroup) { this.occupiedSpace += 3; }
    if (this.twitterTopicAnalysis) { this.occupiedSpace += 3; }
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivityGroup && this.occupiedSpace >= 6 ? true : false;
    this.networkAnalysisDisabled = !this.networkAnalysisGroup && this.occupiedSpace >= 6 ? true : false;
    this.twitterTopicAnalysisDisabled = !this.twitterTopicAnalysis && this.occupiedSpace >= 6 ? true : false;
  }

  onSelect(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.socialActivityGroup = !this.socialActivityGroup;
        this.socialActivityGroup ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      case 'networkAnalysis':
        this.networkAnalysisGroup = !this.networkAnalysisGroup;
        this.networkAnalysisGroup ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      case 'twitterTopicAnalysis':
        this.twitterTopicAnalysis = !this.twitterTopicAnalysis;
        this.twitterTopicAnalysis ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      default:
        break;
    }
  }

}
