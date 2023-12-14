import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias7Component } from './materias7.component';

describe('Materias7Component', () => {
  let component: Materias7Component;
  let fixture: ComponentFixture<Materias7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias7Component]
    });
    fixture = TestBed.createComponent(Materias7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
