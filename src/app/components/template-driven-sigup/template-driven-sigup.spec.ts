import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenSigup } from './template-driven-sigup';

describe('TemplateDrivenSigup', () => {
  let component: TemplateDrivenSigup;
  let fixture: ComponentFixture<TemplateDrivenSigup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenSigup],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenSigup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
