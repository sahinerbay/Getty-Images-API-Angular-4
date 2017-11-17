import { TestBed, inject } from '@angular/core/testing';

import { SetRouteService } from './set-route.service';

describe('SetRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetRouteService]
    });
  });

  it('should be created', inject([SetRouteService], (service: SetRouteService) => {
    expect(service).toBeTruthy();
  }));
});
