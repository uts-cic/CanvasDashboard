import { Injectable } from '@angular/core';
import { SOCIAL_ACTIVITY } from './mock-social-activity';

@Injectable()
export class SocialActivityService {

  constructor() { }

  getSocialActivity() {
    return SOCIAL_ACTIVITY;
  }

}
