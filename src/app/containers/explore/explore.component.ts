import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  submitSearch(text: string) {
    this.searchResultText = text;
  }

  submitSearchFirstVisit(text: string) {
    this.searchResultText = text;
    this.toggleFirstVisit();
  }

  toggleFirstVisit() {
    this.firstVisit = !this.firstVisit;
  }

}
