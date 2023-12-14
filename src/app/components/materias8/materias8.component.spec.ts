import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias8Component } from './materias8.component';

describe('Materias8Component', () => {
  let component: Materias8Component;
  let fixture: ComponentFixture<Materias8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias8Component]
    });
    fixture = TestBed.createComponent(Materias8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
