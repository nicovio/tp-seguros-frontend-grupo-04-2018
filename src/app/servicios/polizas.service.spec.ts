/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PolizasService } from './polizas.service';

describe('Service: Polizas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolizasService]
    });
  });

  it('should ...', inject([PolizasService], (service: PolizasService) => {
    expect(service).toBeTruthy();
  }));
});
