import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias6Component } from './materias6.component';

describe('Materias6Component', () => {
  let component: Materias6Component;
  let fixture: ComponentFixture<Materias6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias6Component]
    });
    fixture = TestBed.createComponent(Materias6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
