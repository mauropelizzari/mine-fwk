import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnMasterPageComponent } from './mn-master-page.component';

describe('MnMasterPageComponent', () => {
  let component: MnMasterPageComponent;
  let fixture: ComponentFixture<MnMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
