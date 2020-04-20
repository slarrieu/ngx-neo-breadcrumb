import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeoBreadcrumbComponent } from './ngx-neo-breadcrumb.component';

describe('NgxNeoBreadcrumbComponent', () => {
  let component: NgxNeoBreadcrumbComponent;
  let fixture: ComponentFixture<NgxNeoBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNeoBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeoBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
