import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from '../../domain/services/content/content.service';
import { Content } from '../../domain/models/content';
import { CONTENTS } from '../../domain/data/mock-content';


@Component({
  selector: 'app-social-student',
  templateUrl: './social-student.component.html',
  styleUrls: ['./social-student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialStudentComponent implements OnInit {
  private content = CONTENTS[0];
  private socialActivityDisabled = false;
  private keywordsDisabled = false;
  private socialReachDisabled = false;
  private engagementDisabled = false;
  private networkDisabled = false;
  private twitterTopicDisabled = false;
  private socialActivityDisabled2 = false;
  private keywordsDisabled2 = false;
  private socialReachDisabled2 = false;
  private engagementDisabled2 = false;
  private networkDisabled2 = false;
  private twitterTopicDisabled2 = false;
  private occupiedSpace = 0;
  private rowFull = false;
  private occupiedSpace2 = 0;
  private rowFull2 = false;
  private progressType = 'primary';
  private progressType2 = 'primary';
  private emptyColSize = 'col-md-12';
  private emptyColSize2 = 'col-md-12';
  private emptySpaceText = '3 of 3 spaces left';
  private emptySpaceText2 = '3 of 3 spaces left';
  private chartDesc = 'Lorem ipsum dolor sit amet, ei mei autem docendi nostrum, esse sonet vel cu.';
  private contentManDesc= 'Use this content manager to configure components available for selection.';

  constructor(private modalService: NgbModal, private contentService: ContentService) { }

  ngOnInit() {
    this.getContent(0);
  }

  getContent(id: number): void {
  this.contentService.getContents()
    .subscribe((contents: Content[]) => {
      this.content = contents[0];
      this.calculateOccupiedSpace();
      this.setDisabledBtn();
      this.calculateOccupiedSpace2();
      this.setDisabledBtn2();
    });
  }

  updateContent(): void {
    this.contentService.updateContent(this.content).subscribe();
  }

  open(content) {
    this.modalService.open(content);
  }

  calculateOccupiedSpace(): void {
    if (this.content.socialActivity) { this.occupiedSpace += 2; }
    if (this.content.keywords) { this.occupiedSpace += 1; }
    if (this.content.socialReach) { this.occupiedSpace += 1; }
    if (this.content.engagement) { this.occupiedSpace += 1; }
    if (this.content.network) { this.occupiedSpace += 1; }
    if (this.content.twitterTopic) { this.occupiedSpace += 3; }
    this.setProgressType();
    this.setEmptySpace();
  }

  calculateOccupiedSpace2(): void {
    if (this.content.socialActivity2) { this.occupiedSpace2 += 2; }
    if (this.content.keywords2) { this.occupiedSpace2 += 1; }
    if (this.content.socialReach2) { this.occupiedSpace2 += 1; }
    if (this.content.engagement2) { this.occupiedSpace2 += 1; }
    if (this.content.network2) { this.occupiedSpace2 += 1; }
    if (this.content.twitterTopic2) { this.occupiedSpace2 += 3; }
    this.setProgressType2();
    this.setEmptySpace2();
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.content.socialActivity && this.occupiedSpace >= 2 || this.content.socialActivity2 ||
    !this.content.socialActivityCheck ? true : false;
    this.keywordsDisabled = !this.content.keywords && this.occupiedSpace >= 3 || this.content.keywords2 ||
    !this.content.keywordsCheck ? true : false;
    this.socialReachDisabled = !this.content.socialReach && this.occupiedSpace >= 3 || this.content.socialReach2 ||
    !this.content.socialReachCheck ? true : false;
    this.engagementDisabled = !this.content.engagement && this.occupiedSpace >= 3 || this.content.engagement2 ||
    !this.content.engagementCheck ? true : false;
    this.networkDisabled = !this.content.network && this.occupiedSpace >= 3 || this.content.network2 ||
    !this.content.networkCheck ? true : false;
    this.twitterTopicDisabled = !this.content.twitterTopic && this.occupiedSpace >= 1 || this.content.twitterTopic2 ||
    !this.content.twitterTopicCheck ? true : false;
  }

  setDisabledBtn2(): void {
    this.socialActivityDisabled2 = !this.content.socialActivity2 && this.occupiedSpace2 >= 2 || this.content.socialActivity ||
    !this.content.socialActivityCheck ? true : false;
    this.keywordsDisabled2 = !this.content.keywords2 && this.occupiedSpace2 >= 3 || this.content.keywords ||
    !this.content.keywordsCheck ? true : false;
    this.socialReachDisabled2 = !this.content.socialReach2 && this.occupiedSpace2 >= 3 || this.content.socialReach ||
    !this.content.socialReachCheck ? true : false;
    this.engagementDisabled2 = !this.content.engagement2 && this.occupiedSpace2 >= 3 || this.content.engagement ||
    !this.content.engagementCheck ? true : false;
    this.networkDisabled2 = !this.content.network2 && this.occupiedSpace2 >= 3 || this.content.network ||
    !this.content.networkCheck ? true : false;
    this.twitterTopicDisabled2 = !this.content.twitterTopic2 && this.occupiedSpace2 >= 1 || this.content.twitterTopic ||
    !this.content.twitterTopicCheck ? true : false;
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

  onSelect(component: string): void {
    if (component === 'socialActivity') {
      this.content.socialActivity = !this.content.socialActivity;
      this.content.socialActivity ? this.occupiedSpace += 2 : this.occupiedSpace -= 2;
    }
    if (component === 'keywords') {
      this.content.keywords = !this.content.keywords;
      this.content.keywords ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'socialReach') {
      this.content.socialReach = !this.content.socialReach;
      this.content.socialReach ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'engagement') {
      this.content.engagement = !this.content.engagement;
      this.content.engagement ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'network') {
      this.content.network = !this.content.network;
      this.content.network ? this.occupiedSpace += 1 : this.occupiedSpace -= 1;
    }
    if (component === 'twitterTopic') {
      this.content.twitterTopic = !this.content.twitterTopic;
      this.content.twitterTopic ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
    }
    this.updateContent();
    this.setDisabledBtn();
    this.setDisabledBtn2();
    this.setProgressType();
    this.setEmptySpace();
  }

  onSelect2(component: string): void {
    if (component === 'socialActivity') {
      this.content.socialActivity2 = !this.content.socialActivity2;
      this.content.socialActivity2 ? this.occupiedSpace2 += 2 : this.occupiedSpace2 -= 2;
    }
    if (component === 'keywords') {
      this.content.keywords2 = !this.content.keywords2;
      this.content.keywords2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'socialReach') {
      this.content.socialReach2 = !this.content.socialReach2;
      this.content.socialReach2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'engagement') {
      this.content.engagement2 = !this.content.engagement2;
      this.content.engagement2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'network') {
      this.content.network2 = !this.content.network2;
      this.content.network2 ? this.occupiedSpace2 += 1 : this.occupiedSpace2 -= 1;
    }
    if (component === 'twitterTopic') {
      this.content.twitterTopic2 = !this.content.twitterTopic2;
      this.content.twitterTopic2 ? this.occupiedSpace2 += 3 : this.occupiedSpace2 -= 3;
    }
    this.updateContent();
    this.setDisabledBtn();
    this.setDisabledBtn2();
    this.setProgressType2();
    this.setEmptySpace2();
  }

}
