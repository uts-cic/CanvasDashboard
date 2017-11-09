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

  constructor() { }

  ngOnInit() {
  }

}
