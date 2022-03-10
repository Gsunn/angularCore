import { TestBed } from '@angular/core/testing';

import { EngineService } from './engine.service';

describe('Engine.Service.TsService', () => {
  let service: Engine.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
