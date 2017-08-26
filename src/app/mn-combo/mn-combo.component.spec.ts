import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnComboComponent } from './mn-combo.component';

describe('MnComboComponent', () => {
  let component: MnComboComponent;
  let fixture: ComponentFixture<MnComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
