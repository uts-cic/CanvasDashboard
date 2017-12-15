/**
 * EXPLORE PAGE
 * Allows searching for a specific topic and showing results of people related to the topic to expand connection
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';
import * as moment from 'moment';

import { people } from '../../domain/data/mock-people';
import { peopleActivities } from '../../domain/data/mock-people-activities';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {
  private firstVisit = true;
  private searchText = '';
  private searchResultText = '';
  private activitiesText = 'Total activities related to ' + this.searchResultText;
  private mockActivity = 'Lorem ipsum dolor sit amet, id veri aliquid docendi nam, qui at soleat lucilius. ' +
  'Option quaestio scribentur his et, an labores facilis eum, vel ea propriae delectus.';
  private people = people;
  private isLoading = true;
  private topicAnalysis = false;
  private personName = '';
  private peopleActivities = peopleActivities;
  private activityIcon = '';
  private personIndex: number;
  private connectModal: any;

  constructor(private modalService: NgbModal, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  /**
   * Opens snackbar for displaying messages on the bottom of page
   * @param message message to be displayed
   * @param action snackbar action button label
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  /**
   * Opens modal to show people activities
   * @param content template for details modal
   * @param personName person name to be displayed
   */
  openDetailsModal(content: any, personName: string) {
    this.personName = personName;
    this.modalService.open(content);
  }

  /**
   * Opens modal to connect with people
   * @param content template for connect modal
   * @param index index of person to connect with
   */
  openConnectModal(content: any, index) {
    this.personIndex = index;
    this.connectModal = this.modalService.open(content);
  }

  /**
   * Connects with a person
   * @param index index of person to connect with
   */
  connect(index: number) {
    this.connectModal.close();
    this.openSnackBar('Connected with ' + people[index].name, 'Dismiss');
  }

  /**
   * Submits search for a specific topic
   * @param text search topic
   */
  submitSearch(text: string) {
    if (text) {
      this.searchResultText = text;
      this.activitiesText = 'Total activities related to ' + this.searchResultText;
      this.mockLoading();
    }
  }

  /**
   * Submits first time search for a specific topic
   * @param text search topic
   */
  submitSearchFirstVisit(text: string) {
    if (text) {
      this.searchResultText = text;
      this.activitiesText = 'Total activities related to ' + this.searchResultText;
      this.toggleFirstVisit();
      this.mockLoading();
    }
  }

  /**
   * Sets whether to show first time search page
   */
  toggleFirstVisit() {
    this.firstVisit = !this.firstVisit;
  }

  /**
   * Simulates loading for 1 second
   */
  mockLoading() {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }

  /**
   * Sets activity icon based on social platform
   * @param platform social platform to determine icon shown
   */
  setActivityIcon(platform: string): string {
    if (platform === 'Facebook') {
      return 'fa fa-facebook-official activities-social-icon';
    }
    if (platform === 'Twitter') {
      return 'fa fa-twitter activities-social-icon';
    }
    if (platform === 'Slack') {
      return 'fa fa-slack activities-social-icon';
    }
  }

  /**
   * Converts milliseconds date (in long/number) to a formatted string date
   * @param dateInLong date in long / number
   */
  dateToString(dateInLong: number): string {
    const date = moment(dateInLong);
    return date.format('D MMM YYYY');
  }

}
