import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnTextFieldComponent } from './mn-text-field.component';

describe('MnTextFieldComponent', () => {
  let component: MnTextFieldComponent;
  let fixture: ComponentFixture<MnTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
