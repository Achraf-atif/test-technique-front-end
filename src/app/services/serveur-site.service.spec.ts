import { TestBed } from '@angular/core/testing';

import { ServeurSiteService } from './serveur-site.service';

describe('ServeurSiteService', () => {
  let service: ServeurSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeurSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
