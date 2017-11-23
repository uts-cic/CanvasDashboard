import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  private socialActivity = false;
  private keywords = false;
  private socialReach = false;
  private engagement = false;
  private network = false;
  private twitterTopic = false;
  private socialActivityDisabled = false;
  private keywordsDisabled = false;
  private socialReachDisabled = false;
  private engagementDisabled = false;
  private networkDisabled = false;
  private twitterTopicDisabled = false;
  private occupiedSpace = 0;
  private rowOccupied = false;
  private socialActivity2 = false;
  private keywords2 = false;
  private socialReach2 = false;
  private engagement2 = false;
  private network2 = false;
  private twitterTopic2 = false;
  private socialActivityDisabled2 = false;
  private keywordsDisabled2 = false;
  private socialReachDisabled2 = false;
  private engagementDisabled2 = false;
  private networkDisabled2 = false;
  private twitterTopicDisabled2 = false;
  private occupiedSpace2 = 0;
  private rowOccupied2 = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.calculateOccupiedSpace();
    this.setDisabledBtn();
    this.calculateOccupiedSpace2();
    this.setDisabledBtn2();
  }

  open(content) {
    this.modalService.open(content);
  }

  calculateOccupiedSpace(): void {
    if (this.socialActivity) { this.occupiedSpace += 2; }
    if (this.keywords) { this.occupiedSpace += 1; }
    if (this.socialReach) { this.occupiedSpace += 1; }
    if (this.engagement) { this.occupiedSpace += 1; }
    if (this.network) { this.occupiedSpace += 1; }
    if (this.twitterTopic) { this.occupiedSpace += 3; }
  }

  calculateOccupiedSpace2(): void {
    if (this.socialActivity2) { this.occupiedSpace2 += 2; }
    if (this.keywords2) { this.occupiedSpace2 += 1; }
    if (this.socialReach2) { this.occupiedSpace2 += 1; }
    if (this.engagement2) { this.occupiedSpace2 += 1; }
    if (this.network2) { this.occupiedSpace2 += 1; }
    if (this.twitterTopic2) { this.occupiedSpace2 += 3; }
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivity && this.occupiedSpace >= 2 || this.socialActivity2 ? true : false;
    this.keywordsDisabled = !this.keywords && this.occupiedSpace >= 3 || this.keywords2 ? true : false;
    this.socialReachDisabled = !this.socialReach && this.occupiedSpace >= 3 || this.socialReach2 ? true : false;
    this.engagementDisabled = !this.engagement && this.occupiedSpace >= 3 || this.engagement2 ? true : false;
    this.networkDisabled = !this.network && this.occupiedSpace >= 3 || this.network2 ? true : false;
    this.twitterTopicDisabled = !this.twitterTopic && this.occupiedSpace >= 1 || this.twitterTopic2 ? true : false;
    this.rowOccupied = this.occupiedSpace > 0 ? true : false;
  }

  setDisabledBtn2(): void {
    this.socialActivityDisabled2 = !this.socialActivity2 && this.occupiedSpace2 >= 2 || this.socialActivity ? true : false;
    this.keywordsDisabled2 = !this.keywords2 && this.occupiedSpace2 >= 3 || this.keywords ? true : false;
    this.socialReachDisabled2 = !this.socialReach2 && this.occupiedSpace2 >= 3 || this.socialReach ? true : false;
    this.engagementDisabled2 = !this.engagement2 && this.occupiedSpace2 >= 3 || this.engagement ? true : false;
    this.networkDisabled2 = !this.network2 && this.occupiedSpace2 >= 3 || this.network ? true : false;
    this.twitterTopicDisabled2 = !this.twitterTopic2 && this.occupiedSpace2 >= 1 || this.twitterTopic ? true : false;
    this.rowOccupied2 = this.occupiedSpace2 > 0 ? true : false;
  }

  onSelect(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.socialActivity = !this.socialActivity;
        this.socialActivity ? this.occupiedSpace += 2 : this.occupiedSpace -= 2;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'keywords':
        this.keywords = !this.keywords;
        this.keywords ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'socialReach':
        this.socialReach = !this.socialReach;
        this.socialReach ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'engagement':
        this.engagement = !this.engagement;
        this.engagement ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'network':
        this.network = !this.network;
        this.network ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'twitterTopic':
        this.twitterTopic = !this.twitterTopic;
        this.twitterTopic ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      default:
        break;
    }
  }

  onSelect2(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.socialActivity2 = !this.socialActivity2;
        this.socialActivity2 ? this.occupiedSpace2 += 2 : this.occupiedSpace2 -= 2;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'keywords':
        this.keywords2 = !this.keywords2;
        this.keywords2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'socialReach':
        this.socialReach2 = !this.socialReach2;
        this.socialReach2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'engagement':
        this.engagement2 = !this.engagement2;
        this.engagement2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'network':
        this.network2 = !this.network2;
        this.network2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      case 'twitterTopic':
        this.twitterTopic2 = !this.twitterTopic2;
        this.twitterTopic2 ? this.occupiedSpace2 += 3 : this.occupiedSpace2 -= 3;
        this.setDisabledBtn();
        this.setDisabledBtn2();
        break;
      default:
        break;
    }
  }

}
