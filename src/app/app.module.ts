import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialActivityChartComponent } from './social-activity-chart/social-activity-chart.component';
import { KeywordsComponent } from './keywords/keywords.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    PersonalComponent,
    SocialActivityChartComponent,
    KeywordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
