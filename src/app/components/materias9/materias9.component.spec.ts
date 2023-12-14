import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias9Component } from './materias9.component';

describe('Materias9Component', () => {
  let component: Materias9Component;
  let fixture: ComponentFixture<Materias9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias9Component]
    });
    fixture = TestBed.createComponent(Materias9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
