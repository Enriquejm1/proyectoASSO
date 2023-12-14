import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoModificarDatosComponent } from './alumno-modificar-datos.component';

describe('AlumnoModificarDatosComponent', () => {
  let component: AlumnoModificarDatosComponent;
  let fixture: ComponentFixture<AlumnoModificarDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoModificarDatosComponent]
    });
    fixture = TestBed.createComponent(AlumnoModificarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
