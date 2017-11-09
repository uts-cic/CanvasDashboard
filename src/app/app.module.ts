import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './/app-routing.module';
import { SocialActivityChartComponent } from './social-activity-chart/social-activity-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    PersonalComponent,
    SocialActivityChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
