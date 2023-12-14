import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCursoAlumnoComponent } from './datos-curso-alumno.component';

describe('DatosCursoAlumnoComponent', () => {
  let component: DatosCursoAlumnoComponent;
  let fixture: ComponentFixture<DatosCursoAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosCursoAlumnoComponent]
    });
    fixture = TestBed.createComponent(DatosCursoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
