import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDatosCursoComponent } from './alumno-datos-curso.component';

describe('AlumnoDatosCursoComponent', () => {
  let component: AlumnoDatosCursoComponent;
  let fixture: ComponentFixture<AlumnoDatosCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoDatosCursoComponent]
    });
    fixture = TestBed.createComponent(AlumnoDatosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
