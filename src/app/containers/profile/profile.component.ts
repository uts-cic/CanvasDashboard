import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialActivity } from '../../domain/models/socialActivity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  private socialActivity = false;
  private engagement = false;
  private socialActivityDisabled = false;
  private engagementDisabled = false;
  private occupiedSpace = 0;
  private emptySpaceClass = 'col-md-6';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.setupAnalyticsPanel();
  }

  onSelect(component: string): void {
    if (component === 'socialActivity') { this.socialActivity = !this.socialActivity; }
    if (component === 'engagement') { this.engagement = !this.engagement; }

    this.setupAnalyticsPanel();
  }

  open(content) {
    this.modalService.open(content);
  }

  setupAnalyticsPanel(): void {
    this.occupiedSpace = 0;

    this.occupiedSpace += this.socialActivity ? 2 : 0;
    this.occupiedSpace += this.engagement ? 1 : 0;

    this.emptySpaceClass = 'col-md-' + (6 - this.occupiedSpace * 3);
    this.setDisabledBtn();
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivity && this.occupiedSpace >= 1 ? true : false;
    this.engagementDisabled = !this.engagement && this.occupiedSpace >= 2 ? true : false;
  }

}
