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
  private rowFull = false;
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
  private rowFull2 = false;
  private socialActivityCheck = true;
  private keywordsCheck = true;
  private socialReachCheck = true;
  private engagementCheck = true;
  private networkCheck = true;
  private twitterTopicCheck = true;
  private progressType = 'primary';
  private progressType2 = 'primary';
  private emptyColSize = 'col-md-12';
  private emptyColSize2 = 'col-md-12';
  private emptySpaceText = '3 of 3 spaces left';
  private emptySpaceText2 = '3 of 3 spaces left';
  private chartDesc = 'Lorem ipsum dolor sit amet, ei mei autem docendi nostrum, esse sonet vel cu.';
  private contentManDesc= 'Use this content manager to configure components available for selection.';

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
    this.setProgressType();
    this.setEmptySpace();
  }

  calculateOccupiedSpace2(): void {
    if (this.socialActivity2) { this.occupiedSpace2 += 2; }
    if (this.keywords2) { this.occupiedSpace2 += 1; }
    if (this.socialReach2) { this.occupiedSpace2 += 1; }
    if (this.engagement2) { this.occupiedSpace2 += 1; }
    if (this.network2) { this.occupiedSpace2 += 1; }
    if (this.twitterTopic2) { this.occupiedSpace2 += 3; }
    this.setProgressType2();
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivity && this.occupiedSpace >= 2 || this.socialActivity2 ||
    !this.socialActivityCheck ? true : false;
    this.keywordsDisabled = !this.keywords && this.occupiedSpace >= 3 || this.keywords2 || !this.keywordsCheck ? true : false;
    this.socialReachDisabled = !this.socialReach && this.occupiedSpace >= 3 || this.socialReach2 || !this.socialReachCheck ? true : false;
    this.engagementDisabled = !this.engagement && this.occupiedSpace >= 3 || this.engagement2 || !this.engagementCheck ? true : false;
    this.networkDisabled = !this.network && this.occupiedSpace >= 3 || this.network2 || !this.networkCheck ? true : false;
    this.twitterTopicDisabled = !this.twitterTopic && this.occupiedSpace >= 1 || this.twitterTopic2 ||
    !this.twitterTopicCheck ? true : false;
  }

  setDisabledBtn2(): void {
    this.socialActivityDisabled2 = !this.socialActivity2 && this.occupiedSpace2 >= 2 || this.socialActivity ||
    !this.socialActivityCheck ? true : false;
    this.keywordsDisabled2 = !this.keywords2 && this.occupiedSpace2 >= 3 || this.keywords || !this.keywordsCheck ? true : false;
    this.socialReachDisabled2 = !this.socialReach2 && this.occupiedSpace2 >= 3 || this.socialReach || !this.socialReachCheck ? true : false;
    this.engagementDisabled2 = !this.engagement2 && this.occupiedSpace2 >= 3 || this.engagement || !this.engagementCheck ? true : false;
    this.networkDisabled2 = !this.network2 && this.occupiedSpace2 >= 3 || this.network || !this.networkCheck ? true : false;
    this.twitterTopicDisabled2 = !this.twitterTopic2 && this.occupiedSpace2 >= 1 || this.twitterTopic ||
    !this.twitterTopicCheck ? true : false;
  }

  setEmptySpace(): void {
    this.emptyColSize = 'col-md-' + (12 - this.occupiedSpace * 4);
    this.rowFull = this.occupiedSpace >= 3 ? true : false;
    this.emptySpaceText = (3 - this.occupiedSpace) + ' of 3 spaces left';
  }

  setEmptySpace2(): void {
    this.emptyColSize2 = 'col-md-' + (12 - this.occupiedSpace2 * 4);
    this.rowFull2 = this.occupiedSpace2 >= 3 ? true : false;
    this.emptySpaceText2 = (3 - this.occupiedSpace2) + ' of 3 spaces left';
  }

  setProgressType(): void {
    switch (this.occupiedSpace) {
      case 1:
        this.progressType = 'primary';
        break;
      case 2:
        this.progressType = 'warning';
        break;
      case 3:
        this.progressType = 'danger';
        break;
      default:
        this.progressType = 'primary';
    }
  }

  setProgressType2(): void {
    switch (this.occupiedSpace2) {
      case 1:
        this.progressType2 = 'primary';
        break;
      case 2:
        this.progressType2 = 'warning';
        break;
      case 3:
        this.progressType2 = 'danger';
        break;
      default:
        this.progressType2 = 'primary';
    }
  }

  onCheck(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.socialActivityCheck = !this.socialActivityCheck;
        if (this.socialActivity) { this.onSelect('socialActivity'); }
        if (this.socialActivity2) { this.onSelect2('socialActivity'); }
        this.socialActivityDisabled = this.socialActivityCheck ? false : true;
        this.socialActivityDisabled2 = this.socialActivityCheck ? false : true;
        break;
      case 'keywords':
        this.keywordsCheck = !this.keywordsCheck;
        if (this.keywords) { this.onSelect('keywords'); }
        if (this.keywords2) { this.onSelect2('keywords'); }
        this.keywordsDisabled = this.keywordsCheck ? false : true;
        this.keywordsDisabled2 = this.keywordsCheck ? false : true;
        break;
      case 'socialReach':
        this.socialReachCheck = !this.socialReachCheck;
        if (this.socialReach) { this.onSelect('socialReach'); }
        if (this.socialReach2) { this.onSelect2('socialReach'); }
        this.socialReachDisabled = this.socialReachCheck ? false : true;
        this.socialReachDisabled2 = this.socialReachCheck ? false : true;
        break;
      case 'engagement':
        this.engagementCheck = !this.engagementCheck;
        if (this.engagement) { this.onSelect('engagement'); }
        if (this.engagement2) { this.onSelect2('engagement'); }
        this.engagementDisabled = this.engagementCheck ? false : true;
        this.engagementDisabled2 = this.engagementCheck ? false : true;
        break;
      case 'network':
        this.networkCheck = !this.networkCheck;
        if (this.network) { this.onSelect('network'); }
        if (this.network2) { this.onSelect2('network'); }
        this.networkDisabled = this.networkCheck ? false : true;
        this.networkDisabled2 = this.networkCheck ? false : true;
        break;
      case 'twitterTopic':
        this.twitterTopicCheck = !this.twitterTopicCheck;
        if (this.twitterTopic) { this.onSelect('twitterTopic'); }
        if (this.twitterTopic2) { this.onSelect2('twitterTopic'); }
        this.twitterTopicDisabled = this.twitterTopicCheck ? false : true;
        this.twitterTopicDisabled2 = this.twitterTopicCheck ? false : true;
        break;
      default:
        break;
    }
  }

  onSelect(component: string): void {
    if (component === 'socialActivity') {
      this.socialActivity = !this.socialActivity;
      this.socialActivity ? this.occupiedSpace += 2 : this.occupiedSpace -= 2;
    }
    if (component === 'keywords') {
      this.keywords = !this.keywords;
      this.keywords ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'socialReach') {
      this.socialReach = !this.socialReach;
      this.socialReach ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'engagement') {
      this.engagement = !this.engagement;
      this.engagement ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'network') {
      this.network = !this.network;
      this.network ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'twitterTopic') {
      this.twitterTopic = !this.twitterTopic;
      this.twitterTopic ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
    }
    this.setDisabledBtn();
    this.setDisabledBtn2();
    this.setProgressType();
    this.setEmptySpace();
  }

  onSelect2(component: string): void {
    if (component === 'socialActivity') {
      this.socialActivity2 = !this.socialActivity2;
      this.socialActivity2 ? this.occupiedSpace2 += 2 : this.occupiedSpace2 -= 2;
    }
    if (component === 'keywords') {
      this.keywords2 = !this.keywords2;
      this.keywords2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'socialReach') {
      this.socialReach2 = !this.socialReach2;
      this.socialReach2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'engagement') {
      this.engagement2 = !this.engagement2;
      this.engagement2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'network') {
      this.network2 = !this.network2;
      this.network2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'twitterTopic') {
      this.twitterTopic2 = !this.twitterTopic2;
      this.twitterTopic2 ? this.occupiedSpace2 += 3 : this.occupiedSpace2 -= 3;
    }
    this.setDisabledBtn();
    this.setDisabledBtn2();
    this.setProgressType2();
    this.setEmptySpace2();
  }

}
