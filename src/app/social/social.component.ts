import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  public isShowSocialActivity = true;
  public isShowNetworkAnalysis = true;
  public isShowTwitterTopicAnalysis = false;

  constructor() { }

  ngOnInit() {
  }

}
