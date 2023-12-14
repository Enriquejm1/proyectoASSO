import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias13Component } from './materias13.component';

describe('Materias13Component', () => {
  let component: Materias13Component;
  let fixture: ComponentFixture<Materias13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias13Component]
    });
    fixture = TestBed.createComponent(Materias13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
