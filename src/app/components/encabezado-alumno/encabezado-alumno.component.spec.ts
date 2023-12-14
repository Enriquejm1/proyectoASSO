import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoAlumnoComponent } from './encabezado-alumno.component';

describe('EncabezadoAlumnoComponent', () => {
  let component: EncabezadoAlumnoComponent;
  let fixture: ComponentFixture<EncabezadoAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoAlumnoComponent]
    });
    fixture = TestBed.createComponent(EncabezadoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
