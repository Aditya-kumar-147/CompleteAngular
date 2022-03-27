import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationSecondComponent } from './form-validation-second.component';

describe('FormValidationSecondComponent', () => {
  let component: FormValidationSecondComponent;
  let fixture: ComponentFixture<FormValidationSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidationSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
