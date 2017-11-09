import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialActivityChartComponent } from './social-activity-chart.component';

describe('SocialActivityChartComponent', () => {
  let component: SocialActivityChartComponent;
  let fixture: ComponentFixture<SocialActivityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialActivityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialActivityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
