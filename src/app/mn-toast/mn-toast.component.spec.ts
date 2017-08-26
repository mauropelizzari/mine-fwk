import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnToastComponent } from './mn-toast.component';

describe('MnToastComponent', () => {
  let component: MnToastComponent;
  let fixture: ComponentFixture<MnToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
