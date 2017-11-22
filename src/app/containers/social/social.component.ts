import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  public socialActivity = false;
  public keywords = false;
  public socialReach = false;
  public engagement = false;
  public network = false;
  public twitterTopic = false;
  public socialActivityDisabled = false;
  public keywordsDisabled = false;
  public socialReachDisabled = false;
  public engagementDisabled = false;
  public networkDisabled = false;
  public twitterTopicDisabled = false;
  public occupiedSpace = 0;
  public rowOccupied = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.calculateOccupiedSpace();
    this.setDisabledBtn();
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

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivity && this.occupiedSpace >= 2 ? true : false;
    this.keywordsDisabled = !this.keywords && this.occupiedSpace >= 3 ? true : false;
    this.socialReachDisabled = !this.socialReach && this.occupiedSpace >= 3 ? true : false;
    this.engagementDisabled = !this.engagement && this.occupiedSpace >= 3 ? true : false;
    this.networkDisabled = !this.network && this.occupiedSpace >= 3 ? true : false;
    this.twitterTopicDisabled = !this.twitterTopic && this.occupiedSpace >= 1 ? true : false;
    this.rowOccupied = this.occupiedSpace > 0 ? true : false;
  }

  onSelect(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.socialActivity = !this.socialActivity;
        this.socialActivity ? this.occupiedSpace += 2 : this.occupiedSpace -= 2;
        this.setDisabledBtn();
        break;
      case 'keywords':
        this.keywords = !this.keywords;
        this.keywords ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        break;
      case 'socialReach':
        this.socialReach = !this.socialReach;
        this.socialReach ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        break;
      case 'engagement':
        this.engagement = !this.engagement;
        this.engagement ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        break;
      case 'network':
        this.network = !this.network;
        this.network ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
        this.setDisabledBtn();
        break;
      case 'twitterTopic':
        this.twitterTopic = !this.twitterTopic;
        this.twitterTopic ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      default:
        break;
    }
  }

}
