import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';


import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialActivityChartComponent } from './social-activity-chart/social-activity-chart.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { SocialReachChartComponent } from './social-reach-chart/social-reach-chart.component';


import 'd3';
import 'nvd3';
import { EngagementChartComponent } from './engagement-chart/engagement-chart.component';
import { NetworkChartComponent } from './network-chart/network-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    PersonalComponent,
    SocialActivityChartComponent,
    KeywordsComponent,
    SocialReachChartComponent,
    EngagementChartComponent,
    NetworkChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
