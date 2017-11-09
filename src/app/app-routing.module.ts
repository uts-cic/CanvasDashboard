import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: 'personal', component: PersonalComponent },
  { path: 'social', component: SocialComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
