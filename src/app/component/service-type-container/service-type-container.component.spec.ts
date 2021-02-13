import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeContainerComponent } from './service-type-container.component';

describe('ServiceTypeContainerComponent', () => {
  let component: ServiceTypeContainerComponent;
  let fixture: ComponentFixture<ServiceTypeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTypeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
