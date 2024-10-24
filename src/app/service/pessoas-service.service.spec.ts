import { TestBed } from '@angular/core/testing';

import { PessoasServiceService } from './pessoas-service.service';

describe('PessoasServiceService', () => {
  let service: PessoasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
