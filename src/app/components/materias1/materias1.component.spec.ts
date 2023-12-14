import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias1Component } from './materias1.component';

describe('Materias1Component', () => {
  let component: Materias1Component;
  let fixture: ComponentFixture<Materias1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias1Component]
    });
    fixture = TestBed.createComponent(Materias1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
