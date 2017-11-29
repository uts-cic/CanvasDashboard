import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SocialComponent } from './containers/social/social.component';
import { PersonalComponent } from './containers/personal/personal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialActivityChartComponent } from './components/social-activity-chart/social-activity-chart.component';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { SocialReachChartComponent } from './components/social-reach-chart/social-reach-chart.component';
import { InMemoryDataService } from './domain/services/in-memory-data.service';

import 'd3';
import 'nvd3';
import { EngagementChartComponent } from './components/engagement-chart/engagement-chart.component';
import { NetworkChartComponent } from './components/network-chart/network-chart.component';
import { TwitterTopicChartComponent } from './components/twitter-topic-chart/twitter-topic-chart.component';
import { SocialActivityService } from './domain/services/social-activity/social-activity.service';
import { ContentService } from './domain/services/content/content.service';
import { SocialStudentComponent } from './containers/social-student/social-student.component';

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
    TwitterTopicChartComponent,
    SocialStudentComponent
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
    ),
    MatCheckboxModule
  ],
  providers: [SocialActivityService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
