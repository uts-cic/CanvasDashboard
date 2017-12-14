/**
 * App routings
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './containers/profile/profile.component';
import { SocialComponent } from './containers/social/social.component';
import { SocialStudentComponent } from './containers/social-student/social-student.component';
import { ExploreComponent } from './containers/explore/explore.component';

const routes: Routes = [
  { path: 'social', component: SocialComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'social-student', component: SocialStudentComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '', redirectTo: '/social', pathMatch: 'full' } // Redirects on empty path
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
