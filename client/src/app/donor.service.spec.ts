/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DonorService } from './donor.service';

describe('DonorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonorService]
    });
  });

  it('should ...', inject([DonorService], (service: DonorService) => {
    expect(service).toBeTruthy();
  }));
});
