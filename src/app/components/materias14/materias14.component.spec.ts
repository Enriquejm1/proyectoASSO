import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias14Component } from './materias14.component';

describe('Materias14Component', () => {
  let component: Materias14Component;
  let fixture: ComponentFixture<Materias14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias14Component]
    });
    fixture = TestBed.createComponent(Materias14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
