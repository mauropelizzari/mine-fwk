import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPageComponent } from './field-page.component';

describe('FieldPageComponent', () => {
  let component: FieldPageComponent;
  let fixture: ComponentFixture<FieldPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
