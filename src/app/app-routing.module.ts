import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
