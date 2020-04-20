import { TestBed } from '@angular/core/testing';

import { NgxNeoBreadcrumbService } from './ngx-neo-breadcrumb.service';

describe('NgxNeoBreadcrumbService', () => {
  let service: NgxNeoBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeoBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
