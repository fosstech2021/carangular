import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaryearComponent } from './caryear.component';

describe('CaryearComponent', () => {
  let component: CaryearComponent;
  let fixture: ComponentFixture<CaryearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaryearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaryearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
