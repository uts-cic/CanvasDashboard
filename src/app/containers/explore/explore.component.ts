import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { people } from '../../domain/data/mock-people';

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

  constructor() { }

  ngOnInit() {
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

}
