import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAnalysisChartComponent } from './topic-analysis-chart.component';

describe('TopicAnalysisChartComponent', () => {
  let component: TopicAnalysisChartComponent;
  let fixture: ComponentFixture<TopicAnalysisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAnalysisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAnalysisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
