import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterTopicChartComponent } from './twitter-topic-chart.component';

describe('TwitterTopicChartComponent', () => {
  let component: TwitterTopicChartComponent;
  let fixture: ComponentFixture<TwitterTopicChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterTopicChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterTopicChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
