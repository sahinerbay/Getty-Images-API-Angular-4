import { TestBed, inject } from '@angular/core/testing';

import { GetRouteService } from './get-route.service';

describe('GetRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRouteService]
    });
  });

  it('should be created', inject([GetRouteService], (service: GetRouteService) => {
    expect(service).toBeTruthy();
  }));
});
