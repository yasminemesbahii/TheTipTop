import { TestBed } from '@angular/core/testing';

import { ApiAppService } from './api-app.service';

describe('ApiAppService', () => {
  let service: ApiAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
