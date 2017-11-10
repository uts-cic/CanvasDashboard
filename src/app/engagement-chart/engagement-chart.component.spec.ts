import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementChartComponent } from './engagement-chart.component';

describe('EngagementChartComponent', () => {
  let component: EngagementChartComponent;
  let fixture: ComponentFixture<EngagementChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
