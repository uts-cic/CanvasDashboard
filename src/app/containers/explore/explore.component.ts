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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openDetailsModal(content: any, personName: string) {
    this.personName = personName;
    this.modalService.open(content);
  }

  openConnectModal(content: any, index) {
    this.personIndex = index;
    this.connectModal = this.modalService.open(content);
  }

  connect(index: number) {
    this.connectModal.close();
    this.openSnackBar('Connected with ' + people[index].name, 'Dismiss');
  }

  submitSearch(text: string) {
    if (text) {
      this.searchResultText = text;
      this.activitiesText = 'Total activities related to ' + this.searchResultText;
      this.mockLoading();
    }
  }

  submitSearchFirstVisit(text: string) {
    if (text) {
      this.searchResultText = text;
      this.activitiesText = 'Total activities related to ' + this.searchResultText;
      this.toggleFirstVisit();
      this.mockLoading();
    }
  }

  toggleFirstVisit() {
    this.firstVisit = !this.firstVisit;
  }

  mockLoading() {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }

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

  dateToString(dateInLong: number): string {
    const date = moment(dateInLong);
    return date.format('D MMM YYYY');
  }

}
