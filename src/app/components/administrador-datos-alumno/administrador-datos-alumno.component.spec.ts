import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDatosAlumnoComponent } from './administrador-datos-alumno.component';

describe('AdministradorDatosAlumnoComponent', () => {
  let component: AdministradorDatosAlumnoComponent;
  let fixture: ComponentFixture<AdministradorDatosAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorDatosAlumnoComponent]
    });
    fixture = TestBed.createComponent(AdministradorDatosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
