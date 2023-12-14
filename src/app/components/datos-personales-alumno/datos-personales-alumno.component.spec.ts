import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesAlumnoComponent } from './datos-personales-alumno.component';

describe('DatosPersonalesAlumnoComponent', () => {
  let component: DatosPersonalesAlumnoComponent;
  let fixture: ComponentFixture<DatosPersonalesAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosPersonalesAlumnoComponent]
    });
    fixture = TestBed.createComponent(DatosPersonalesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
