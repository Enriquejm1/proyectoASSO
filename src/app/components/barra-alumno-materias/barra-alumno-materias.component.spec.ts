import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAlumnoMateriasComponent } from './barra-alumno-materias.component';

describe('BarraAlumnoMateriasComponent', () => {
  let component: BarraAlumnoMateriasComponent;
  let fixture: ComponentFixture<BarraAlumnoMateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraAlumnoMateriasComponent]
    });
    fixture = TestBed.createComponent(BarraAlumnoMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
