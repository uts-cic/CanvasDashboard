/**
 * PROFILE PAGE
 * shows a user's details and can be utilised to be configurable as a public profile when authentication works.
 */
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
  private emptySpaceText = '2 of 2 spaces left';
  private progressType = 'warning';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.setupAnalyticsPanel();
  }

  /**
   * Toggles boolean value of each analytic component based on selection to determine whether the component is shown.
   * @param component name of selected component
   */
  onSelect(component: string): void {
    if (component === 'socialActivity') { this.socialActivity = !this.socialActivity; }
    if (component === 'engagement') { this.engagement = !this.engagement; }
    if (component === 'socialReach') { this.socialReach = !this.socialReach; }
    if (component === 'network') { this.network = !this.network; }

    this.setupAnalyticsPanel();
  }

  /**
   * Opens a modal with the given template
   * @param content template of modal to be shown
   */
  open(content: any): void {
    this.modalService.open(content);
  }

  /**
   * Sets up all component within the analytics panel
   */
  setupAnalyticsPanel(): void {
    this.occupiedSpace = 0;

    // Calculates occupied space based on which components are shown
    this.occupiedSpace += this.socialActivity ? 2 : 0;
    this.occupiedSpace += this.engagement ? 1 : 0;
    this.occupiedSpace += this.socialReach ? 1 : 0;
    this.occupiedSpace += this.network ? 1 : 0;

    // Adjusts empty space panel size and the status text shown
    this.emptySpaceClass = 'col-md-' + (6 - this.occupiedSpace * 3);
    this.emptySpaceText = (2 - this.occupiedSpace) + ' of 2 spaces left';

    // Sets colour of progress bar based on how many spaces are occupied
    this.progressType = this.occupiedSpace === 1 ? 'warning' : 'danger';

    this.setDisabledBtn();
  }

  /**
   * Disables certain components selection buttons based on how many free spaces are left
   */
  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivity && this.occupiedSpace >= 1 ? true : false;
    this.engagementDisabled = !this.engagement && this.occupiedSpace >= 2 ? true : false;
    this.socialReachDisabled = !this.socialReach && this.occupiedSpace >= 2 ? true : false;
    this.networkDisabled = !this.network && this.occupiedSpace >= 2 ? true : false;
  }

}
