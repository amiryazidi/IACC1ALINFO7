import { TestBed } from '@angular/core/testing';

import { ClaculService } from './clacul.service';

describe('ClaculService', () => {
  let service: ClaculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
