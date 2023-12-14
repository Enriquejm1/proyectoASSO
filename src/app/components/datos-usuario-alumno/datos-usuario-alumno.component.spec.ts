import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioAlumnoComponent } from './datos-usuario-alumno.component';

describe('DatosUsuarioAlumnoComponent', () => {
  let component: DatosUsuarioAlumnoComponent;
  let fixture: ComponentFixture<DatosUsuarioAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosUsuarioAlumnoComponent]
    });
    fixture = TestBed.createComponent(DatosUsuarioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
