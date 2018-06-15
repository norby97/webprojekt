import { TestBed, inject } from '@angular/core/testing';

import { RegloginService } from './reglogin.service';

describe('RegloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegloginService]
    });
  });

  it('should be created', inject([RegloginService], (service: RegloginService) => {
    expect(service).toBeTruthy();
  }));
});
