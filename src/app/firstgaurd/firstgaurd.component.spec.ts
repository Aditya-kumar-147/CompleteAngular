import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgaurdComponent } from './firstgaurd.component';

describe('FirstgaurdComponent', () => {
  let component: FirstgaurdComponent;
  let fixture: ComponentFixture<FirstgaurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstgaurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstgaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
