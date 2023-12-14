import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias10Component } from './materias10.component';

describe('Materias10Component', () => {
  let component: Materias10Component;
  let fixture: ComponentFixture<Materias10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias10Component]
    });
    fixture = TestBed.createComponent(Materias10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
