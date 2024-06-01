import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './apiService.service';

describe('ApiserviceService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
