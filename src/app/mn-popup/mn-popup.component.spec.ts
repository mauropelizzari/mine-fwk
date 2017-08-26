import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnPopupComponent } from './mn-popup.component';

describe('MnPopupComponent', () => {
  let component: MnPopupComponent;
  let fixture: ComponentFixture<MnPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
