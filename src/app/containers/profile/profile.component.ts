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
  private socialReach = false;
  private network = false;
  private socialActivityDisabled = false;
  private engagementDisabled = false;
  private socialReachDisabled = false;
  private networkDisabled = false;
  private occupiedSpace = 0;
  private emptySpaceClass = 'col-md-6';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.setupAnalyticsPanel();
  }

  onSelect(component: string): void {
    if (component === 'socialActivity') { this.socialActivity = !this.socialActivity; }
    if (component === 'engagement') { this.engagement = !this.engagement; }
    if (component === 'socialReach') { this.socialReach = !this.socialReach; }
    if (component === 'network') { this.network = !this.network; }

    this.setupAnalyticsPanel();
  }

  open(content) {
    this.modalService.open(content);
  }

  setupAnalyticsPanel(): void {
    this.occupiedSpace = 0;

    this.occupiedSpace += this.socialActivity ? 2 : 0;
    this.occupiedSpace += this.engagement ? 1 : 0;
    this.occupiedSpace += this.socialReach ? 1 : 0;
    this.occupiedSpace += this.network ? 1 : 0;

    this.emptySpaceClass = 'col-md-' + (6 - this.occupiedSpace * 3);
    this.setDisabledBtn();
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivity && this.occupiedSpace >= 1 ? true : false;
    this.engagementDisabled = !this.engagement && this.occupiedSpace >= 2 ? true : false;
    this.socialReachDisabled = !this.socialReach && this.occupiedSpace >= 2 ? true : false;
    this.networkDisabled = !this.network && this.occupiedSpace >= 2 ? true : false;
  }

}
