import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { KEYWORDS } from '../mock-keywords';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  keywords = KEYWORDS;

  constructor() { }

  ngOnInit() {
  }

}
