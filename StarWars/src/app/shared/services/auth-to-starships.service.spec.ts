import { TestBed } from '@angular/core/testing';

import { AuthToStarshipsService } from './auth-to-starships.service';

describe('AuthToStarshipsService', () => {
  let service: AuthToStarshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthToStarshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
