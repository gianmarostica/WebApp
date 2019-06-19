/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VacinaService } from './vacina.service';

describe('Service: Vacina', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacinaService]
    });
  });

  it('should ...', inject([VacinaService], (service: VacinaService) => {
    expect(service).toBeTruthy();
  }));
});
