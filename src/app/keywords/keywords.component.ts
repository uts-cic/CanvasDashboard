import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { KEYWORDS } from '../mock-keywords';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {

  keywords = KEYWORDS;

  selectedKeyword: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect(keyword: any): void {
    this.selectedKeyword = this.selectedKeyword === keyword ? undefined : keyword;
  }

}
