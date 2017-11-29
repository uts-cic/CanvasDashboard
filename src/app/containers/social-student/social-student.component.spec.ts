import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStudentComponent } from './social-student.component';

describe('SocialStudentComponent', () => {
  let component: SocialStudentComponent;
  let fixture: ComponentFixture<SocialStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
