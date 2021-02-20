import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFolderComponent } from './parent-folder.component';

describe('ParentFolderComponent', () => {
  let component: ParentFolderComponent;
  let fixture: ComponentFixture<ParentFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
