/**
 * SOCIAL PAGE
 * Instructor's social dashboard which can be used to preset student's dashboard
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from '../../domain/services/content/content.service';
import { Content } from '../../domain/models/content';
import { contents } from '../../domain/data/mock-content';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  private content = contents[0]; // Initialise content to avoid undefined errors before contents finishes loading
  private chartDesc = 'Lorem ipsum dolor sit amet, ei mei autem docendi nostrum, esse sonet vel cu.';
  private contentManDesc= 'Use this content manager to configure components available for selection.';
  private isLoading = true;
  private taskCollapse = true; // Boolean to toggle Task Manager - true = collapsed
  private taskManHint = 'Use this task manager to assign tasks for students. (Click to toggle open/close)';

  // First row component attributes
  private socialActivityDisabled = false;
  private keywordsDisabled = false;
  private socialReachDisabled = false;
  private engagementDisabled = false;
  private networkDisabled = false;
  private twitterTopicDisabled = false;
  private occupiedSpace = 0;
  private rowFull = false;
  private progressType = 'primary';
  private emptyColSize = 'col-md-12';
  private emptySpaceText = '3 of 3 spaces left';

  // Second row component attributes
  private socialActivityDisabled2 = false;
  private keywordsDisabled2 = false;
  private socialReachDisabled2 = false;
  private engagementDisabled2 = false;
  private networkDisabled2 = false;
  private twitterTopicDisabled2 = false;
  private occupiedSpace2 = 0;
  private rowFull2 = false;
  private progressType2 = 'primary';
  private emptyColSize2 = 'col-md-12';
  private emptySpaceText2 = '3 of 3 spaces left';

  constructor(private modalService: NgbModal, private contentService: ContentService) { }

  ngOnInit() {
    this.getContent(1);
  }

  /**
   * Gets page contents from Content Service and setup page after contents are fetched
   * @param id content ID (from mock content)
   */
  getContent(id: number): void {
    this.contentService.getContent(id).subscribe((content) => {
      this.content = content;
      this.setupPage();
      this.setupPage2();
      this.isLoading = false;
    });
  }

  /**
   * Updates both instructor and student contents
   */
  updateContent(): void {
    this.contentService.updateContent(this.content).subscribe();
    // Update student content (index 2 in mock data)
    this.contentService.getContent(2).subscribe((content) => {
      this.copyContent(this.content, content);
      this.contentService.updateContent(content).subscribe();
    });
  }

  /**
   * Opens a modal
   * @param content modal template
   */
  open(content) {
    this.modalService.open(content);
  }

  /**
   * Setup page attributes based on first row components
   */
  setupPage(): void {
    this.occupiedSpace = 0;

    if (this.content.socialActivity) { this.occupiedSpace += 2; }
    if (this.content.keywords) { this.occupiedSpace += 1; }
    if (this.content.socialReach) { this.occupiedSpace += 1; }
    if (this.content.engagement) { this.occupiedSpace += 1; }
    if (this.content.network) { this.occupiedSpace += 1; }
    if (this.content.twitterTopic) { this.occupiedSpace += 3; }

    this.setProgressType();
    this.setEmptySpace();
    this.setDisabledBtn();
    this.setDisabledBtn2();
  }

  /**
   * Setup page attributes based on second row components
   */
  setupPage2(): void {
    this.occupiedSpace2 = 0;

    if (this.content.socialActivity2) { this.occupiedSpace2 += 2; }
    if (this.content.keywords2) { this.occupiedSpace2 += 1; }
    if (this.content.socialReach2) { this.occupiedSpace2 += 1; }
    if (this.content.engagement2) { this.occupiedSpace2 += 1; }
    if (this.content.network2) { this.occupiedSpace2 += 1; }
    if (this.content.twitterTopic2) { this.occupiedSpace2 += 3; }

    this.setProgressType2();
    this.setEmptySpace2();
    this.setDisabledBtn();
    this.setDisabledBtn2();
  }

  /**
   * Determines disabled first row selections based on attribute checks
   */
  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.content.socialActivity && this.occupiedSpace >= 2 || this.content.socialActivity2 ? true : false;
    this.keywordsDisabled = !this.content.keywords && this.occupiedSpace >= 3 || this.content.keywords2 ? true : false;
    this.socialReachDisabled = !this.content.socialReach && this.occupiedSpace >= 3 || this.content.socialReach2 ? true : false;
    this.engagementDisabled = !this.content.engagement && this.occupiedSpace >= 3 || this.content.engagement2 ? true : false;
    this.networkDisabled = !this.content.network && this.occupiedSpace >= 3 || this.content.network2 ? true : false;
    this.twitterTopicDisabled = !this.content.twitterTopic && this.occupiedSpace >= 1 || this.content.twitterTopic2 ? true : false;
  }

  /**
   * Determines disabled second row selections based on attribute checks
   */
  setDisabledBtn2(): void {
    this.socialActivityDisabled2 = !this.content.socialActivity2 && this.occupiedSpace2 >= 2 || this.content.socialActivity ? true : false;
    this.keywordsDisabled2 = !this.content.keywords2 && this.occupiedSpace2 >= 3 || this.content.keywords ? true : false;
    this.socialReachDisabled2 = !this.content.socialReach2 && this.occupiedSpace2 >= 3 || this.content.socialReach ? true : false;
    this.engagementDisabled2 = !this.content.engagement2 && this.occupiedSpace2 >= 3 || this.content.engagement ? true : false;
    this.networkDisabled2 = !this.content.network2 && this.occupiedSpace2 >= 3 || this.content.network ? true : false;
    this.twitterTopicDisabled2 = !this.content.twitterTopic2 && this.occupiedSpace2 >= 1 || this.content.twitterTopic ? true : false;
  }

  /**
   * Sets attributes of 'select your content' empty space (first row)
   */
  setEmptySpace(): void {
    this.emptyColSize = 'col-md-' + (12 - this.occupiedSpace * 4);
    this.rowFull = this.occupiedSpace >= 3 ? true : false;
    this.emptySpaceText = (3 - this.occupiedSpace) + ' of 3 spaces left';
  }

  /**
   * Sets attributes of 'select your content' empty space (second row)
   */
  setEmptySpace2(): void {
    this.emptyColSize2 = 'col-md-' + (12 - this.occupiedSpace2 * 4);
    this.rowFull2 = this.occupiedSpace2 >= 3 ? true : false;
    this.emptySpaceText2 = (3 - this.occupiedSpace2) + ' of 3 spaces left';
  }

  /**
   * Selects or deselects first row components when content selection modal buttons are clicked
   * @param component informs which button is clicked
   */
  onSelect(component: string): void {
    if (component === 'socialActivity') { this.content.socialActivity = !this.content.socialActivity; }
    if (component === 'keywords') { this.content.keywords = !this.content.keywords; }
    if (component === 'socialReach') { this.content.socialReach = !this.content.socialReach; }
    if (component === 'engagement') { this.content.engagement = !this.content.engagement; }
    if (component === 'network') { this.content.network = !this.content.network; }
    if (component === 'twitterTopic') { this.content.twitterTopic = !this.content.twitterTopic; }

    this.setupPage();
    this.updateContent();
  }

  /**
   * Selects or deselects first row components when content selection modal buttons are clicked
   * @param component informs which button is clicked
   */
  onSelect2(component: string): void {
    if (component === 'socialActivity') { this.content.socialActivity2 = !this.content.socialActivity2; }
    if (component === 'keywords') { this.content.keywords2 = !this.content.keywords2; }
    if (component === 'socialReach') { this.content.socialReach2 = !this.content.socialReach2; }
    if (component === 'engagement') { this.content.engagement2 = !this.content.engagement2; }
    if (component === 'network') { this.content.network2 = !this.content.network2; }
    if (component === 'twitterTopic') { this.content.twitterTopic2 = !this.content.twitterTopic2; }

    this.setupPage2();
    this.updateContent();
  }

  /**
   * Updates contents when charts are disabled or enabled (Content Manager functionality)
   * @param component informs which checkbox is clicked
   */
  onCheck(component: string): void {
    if (component === 'socialActivity') {
      this.content.socialActivityCheck = !this.content.socialActivityCheck;
      if (this.content.socialActivity) { this.onSelect('socialActivity'); }
      if (this.content.socialActivity2) { this.onSelect2('socialActivity'); }
    }
    if (component === 'keywords') {
      this.content.keywordsCheck = !this.content.keywordsCheck;
      if (this.content.keywords) { this.onSelect('keywords'); }
      if (this.content.keywords2) { this.onSelect2('keywords'); }
    }
    if (component === 'socialReach') {
      this.content.socialReachCheck = !this.content.socialReachCheck;
      if (this.content.socialReach) { this.onSelect('socialReach'); }
      if (this.content.socialReach2) { this.onSelect2('socialReach'); }
    }
    if (component === 'engagement') {
      this.content.engagementCheck = !this.content.engagementCheck;
      if (this.content.engagement) { this.onSelect('engagement'); }
      if (this.content.engagement2) { this.onSelect2('engagement'); }
    }
    if (component === 'network') {
      this.content.networkCheck = !this.content.networkCheck;
      if (this.content.network) { this.onSelect('network'); }
      if (this.content.network2) { this.onSelect2('network'); }
    }
    if (component === 'twitterTopic') {
      this.content.twitterTopicCheck = !this.content.twitterTopicCheck;
      if (this.content.twitterTopic) { this.onSelect('twitterTopic'); }
      if (this.content.twitterTopic2) { this.onSelect2('twitterTopic'); }
    }
    this.updateContent();
  }

  /**
   * Sets progress bar color for first row content selection modal
   */
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

  /**
   * Sets progress bar color for second row content selection modal
   */
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

  /**
   * Copies content attributes from one content to another (deep copy)
   * @param fromContent content to be copied from
   * @param toContent content to be copied to
   */
  copyContent(fromContent: Content, toContent: Content): void {
    toContent.socialActivity = fromContent.socialActivity;
    toContent.keywords = fromContent.keywords;
    toContent.socialReach = fromContent.socialReach;
    toContent.engagement = fromContent.engagement;
    toContent.network = fromContent.network;
    toContent.twitterTopic = fromContent.twitterTopic;
    toContent.socialActivity2 = fromContent.socialActivity2;
    toContent.keywords2 = fromContent.keywords2;
    toContent.socialReach2 = fromContent.socialReach2;
    toContent.engagement2 = fromContent.engagement2;
    toContent.network2 = fromContent.network2;
    toContent.twitterTopic2 = fromContent.twitterTopic2;
    toContent.socialActivityCheck = fromContent.socialActivityCheck;
    toContent.keywordsCheck = fromContent.keywordsCheck;
    toContent.socialReachCheck = fromContent.socialReachCheck;
    toContent.engagementCheck = fromContent.engagementCheck;
    toContent.networkCheck = fromContent.networkCheck;
    toContent.twitterTopicCheck = fromContent.twitterTopicCheck;
  }

}
