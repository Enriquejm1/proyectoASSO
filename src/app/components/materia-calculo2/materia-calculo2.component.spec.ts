import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCalculo2Component } from './materia-calculo2.component';

describe('MateriaCalculo2Component', () => {
  let component: MateriaCalculo2Component;
  let fixture: ComponentFixture<MateriaCalculo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaCalculo2Component]
    });
    fixture = TestBed.createComponent(MateriaCalculo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
