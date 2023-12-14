import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAlumnoComponent } from './contenido-alumno.component';

describe('ContenidoAlumnoComponent', () => {
  let component: ContenidoAlumnoComponent;
  let fixture: ComponentFixture<ContenidoAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoAlumnoComponent]
    });
    fixture = TestBed.createComponent(ContenidoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
