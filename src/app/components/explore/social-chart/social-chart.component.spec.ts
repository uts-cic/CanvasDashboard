import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChartComponent } from './social-chart.component';

describe('SocialChartComponent', () => {
  let component: SocialChartComponent;
  let fixture: ComponentFixture<SocialChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
