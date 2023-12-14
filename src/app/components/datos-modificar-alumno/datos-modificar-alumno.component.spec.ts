import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosModificarAlumnoComponent } from './datos-modificar-alumno.component';

describe('DatosModificarAlumnoComponent', () => {
  let component: DatosModificarAlumnoComponent;
  let fixture: ComponentFixture<DatosModificarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosModificarAlumnoComponent]
    });
    fixture = TestBed.createComponent(DatosModificarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
