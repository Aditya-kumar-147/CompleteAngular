import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgaurdComponent } from './secondgaurd.component';

describe('SecondgaurdComponent', () => {
  let component: SecondgaurdComponent;
  let fixture: ComponentFixture<SecondgaurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondgaurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondgaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
