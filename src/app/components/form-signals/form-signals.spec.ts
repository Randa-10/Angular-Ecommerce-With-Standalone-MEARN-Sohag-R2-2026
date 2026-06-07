import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignals } from './form-signals';

describe('FormSignals', () => {
  let component: FormSignals;
  let fixture: ComponentFixture<FormSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
