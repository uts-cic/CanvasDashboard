import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAnalysisComponent } from './topic-analysis.component';

describe('TopicAnalysisComponent', () => {
  let component: TopicAnalysisComponent;
  let fixture: ComponentFixture<TopicAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
