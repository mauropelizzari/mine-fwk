import { TestBed, inject } from '@angular/core/testing';

import { Mn } from './mn.service';

describe('MnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Mn]
    });
  });

  it('should be created', inject([Mn], (service: Mn) => {
    expect(service).toBeTruthy();
  }));
});
