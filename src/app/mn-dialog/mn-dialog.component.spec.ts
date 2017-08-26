import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnDialogComponent } from './mn-dialog.component';

describe('MnDialogComponent', () => {
  let component: MnDialogComponent;
  let fixture: ComponentFixture<MnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
