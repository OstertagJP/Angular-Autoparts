import { TestBed } from '@angular/core/testing';

import { AutopartDataService } from './autopart-data.service';

describe('AutopartDataService', () => {
  let service: AutopartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutopartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
