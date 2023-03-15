import { TestBed } from '@angular/core/testing';

import { DoctorPartService } from './doctor-part.service';

describe('DoctorPartService', () => {
  let service: DoctorPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
