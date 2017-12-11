import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatCheckboxModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SocialComponent } from './containers/social/social.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialActivityChartComponent } from './components/social/social-activity-chart/social-activity-chart.component';
import { KeywordsComponent } from './components/social/keywords/keywords.component';
import { SocialReachChartComponent } from './components/social/social-reach-chart/social-reach-chart.component';
import { InMemoryDataService } from './domain/services/in-memory-data.service';

import 'd3';
import 'nvd3';
import { EngagementChartComponent } from './components/social/engagement-chart/engagement-chart.component';
import { NetworkChartComponent } from './components/social/network-chart/network-chart.component';
import { TwitterTopicChartComponent } from './components/social/twitter-topic-chart/twitter-topic-chart.component';
import { SocialActivityService } from './domain/services/social-activity/social-activity.service';
import { ContentService } from './domain/services/content/content.service';
import { SocialStudentComponent } from './containers/social-student/social-student.component';
import { ExploreComponent } from './containers/explore/explore.component';
import { TopicAnalysisComponent } from './components/explore/topic-analysis/topic-analysis.component';
import { SocialChartComponent } from './components/explore/social-chart/social-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    ProfileComponent,
    SocialActivityChartComponent,
    KeywordsComponent,
    SocialReachChartComponent,
    EngagementChartComponent,
    NetworkChartComponent,
    TwitterTopicChartComponent,
    SocialStudentComponent,
    ExploreComponent,
    TopicAnalysisComponent,
    SocialChartComponent
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
    MatCheckboxModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [SocialActivityService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
