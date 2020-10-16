import { TestBed } from '@angular/core/testing';

import { GqlCacheService } from './gql-cache.service';

describe('GqlCacheService', () => {
  let service: GqlCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GqlCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
