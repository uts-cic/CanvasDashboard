import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {
  public socialActivityGroup = false;
  public networkAnalysisGroup = false;
  public twitterTopicAnalysis = false;
  public socialActivityDisabled = false;
  public networkAnalysisDisabled = false;
  public twitterTopicAnalysisDisabled = false;
  public occupiedSpace = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.calculateOccupiedSpace();
    this.setDisabledBtn();
  }

  open(content) {
    this.modalService.open(content);
  }

  calculateOccupiedSpace(): void {
    if (this.socialActivityGroup) { this.occupiedSpace += 3; }
    if (this.networkAnalysisGroup) { this.occupiedSpace += 3; }
    if (this.twitterTopicAnalysis) { this.occupiedSpace += 3; }
  }

  setDisabledBtn(): void {
    this.socialActivityDisabled = !this.socialActivityGroup && this.occupiedSpace >= 6 ? true : false;
    this.networkAnalysisDisabled = !this.networkAnalysisGroup && this.occupiedSpace >= 6 ? true : false;
    this.twitterTopicAnalysisDisabled = !this.twitterTopicAnalysis && this.occupiedSpace >= 6 ? true : false;
  }

  onSelect(component: string): void {
    switch (component) {
      case 'socialActivity':
        this.socialActivityGroup = !this.socialActivityGroup;
        this.socialActivityGroup ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      case 'networkAnalysis':
        this.networkAnalysisGroup = !this.networkAnalysisGroup;
        this.networkAnalysisGroup ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      case 'twitterTopicAnalysis':
        this.twitterTopicAnalysis = !this.twitterTopicAnalysis;
        this.twitterTopicAnalysis ? this.occupiedSpace += 3 : this.occupiedSpace -= 3;
        this.setDisabledBtn();
        break;
      default:
        break;
    }
  }

}
