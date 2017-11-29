import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './containers/personal/personal.component';
import { SocialComponent } from './containers/social/social.component';
import { SocialStudentComponent } from './containers/social-student/social-student.component';

const routes: Routes = [
  { path: 'social', component: SocialComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'social-student', component: SocialStudentComponent },
  { path: '', redirectTo: '/social', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
