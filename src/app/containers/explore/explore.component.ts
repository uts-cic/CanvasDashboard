import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {
  private firstVisit = true;

  constructor() { }

  ngOnInit() {
  }

  toggleFirstVisit() {
    this.firstVisit = !this.firstVisit;
  }

}
