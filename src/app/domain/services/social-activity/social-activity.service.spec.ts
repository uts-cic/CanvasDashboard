import { TestBed, inject } from '@angular/core/testing';

import { SocialActivityService } from './social-activity.service';

describe('SocialActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialActivityService]
    });
  });

  it('should be created', inject([SocialActivityService], (service: SocialActivityService) => {
    expect(service).toBeTruthy();
  }));
});
