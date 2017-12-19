import { TestBed, inject } from '@angular/core/testing';

import { GiftedApiService } from './gifted-api.service';

describe('GiftedApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiftedApiService]
    });
  });

  it('should be created', inject([GiftedApiService], (service: GiftedApiService) => {
    expect(service).toBeTruthy();
  }));
});
