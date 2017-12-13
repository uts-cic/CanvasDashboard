import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialReachChartComponent } from './social-reach-chart.component';

describe('SocialReachChartComponent', () => {
  let component: SocialReachChartComponent;
  let fixture: ComponentFixture<SocialReachChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialReachChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialReachChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
