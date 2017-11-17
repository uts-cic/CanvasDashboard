import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { SOCIAL_ACTIVITY } from './mock-social-activity';

@Injectable()
export class SocialActivityService {

  constructor() { }

  getSocialActivity() {
    return of(SOCIAL_ACTIVITY);
  }

}
