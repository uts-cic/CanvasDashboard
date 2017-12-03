/**
 * App routings
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './containers/personal/personal.component';
import { SocialComponent } from './containers/social/social.component';
import { SocialStudentComponent } from './containers/social-student/social-student.component';
import { ExploreComponent } from './containers/explore/explore.component';

const routes: Routes = [
  { path: 'social', component: SocialComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'social-student', component: SocialStudentComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '', redirectTo: '/social', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
