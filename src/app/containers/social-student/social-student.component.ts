import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social-student',
  templateUrl: './social-student.component.html',
  styleUrls: ['./social-student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialStudentComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

}
