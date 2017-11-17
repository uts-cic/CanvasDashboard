import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialActivityChartComponent } from './social-activity-chart/social-activity-chart.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { SocialReachChartComponent } from './social-reach-chart/social-reach-chart.component';
import { InMemoryDataService } from './in-memory-data.service';

import 'd3';
import 'nvd3';
import { EngagementChartComponent } from './engagement-chart/engagement-chart.component';
import { NetworkChartComponent } from './network-chart/network-chart.component';
import { TwitterTopicChartComponent } from './twitter-topic-chart/twitter-topic-chart.component';
import { SocialActivityService } from './social-activity.service';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    PersonalComponent,
    SocialActivityChartComponent,
    KeywordsComponent,
    SocialReachChartComponent,
    EngagementChartComponent,
    NetworkChartComponent,
    TwitterTopicChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvD3Module,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [SocialActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
