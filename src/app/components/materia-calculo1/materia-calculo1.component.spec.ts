import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCalculo1Component } from './materia-calculo1.component';

describe('MateriaCalculo1Component', () => {
  let component: MateriaCalculo1Component;
  let fixture: ComponentFixture<MateriaCalculo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaCalculo1Component]
    });
    fixture = TestBed.createComponent(MateriaCalculo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
