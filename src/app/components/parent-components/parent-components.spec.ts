import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponents } from './parent-components';

describe('ParentComponents', () => {
  let component: ParentComponents;
  let fixture: ComponentFixture<ParentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
