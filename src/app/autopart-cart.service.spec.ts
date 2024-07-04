import { TestBed } from '@angular/core/testing';

import { AutopartCartService } from './autopart-cart.service';

describe('AutopartCartService', () => {
  let service: AutopartCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutopartCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
