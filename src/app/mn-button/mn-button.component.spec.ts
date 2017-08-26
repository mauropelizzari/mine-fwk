import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnButtonComponent } from './mn-button.component';

describe('MnButtonComponent', () => {
  let component: MnButtonComponent;
  let fixture: ComponentFixture<MnButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
