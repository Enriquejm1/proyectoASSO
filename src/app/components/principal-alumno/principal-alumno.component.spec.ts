import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAlumnoComponent } from './principal-alumno.component';

describe('PrincipalAlumnoComponent', () => {
  let component: PrincipalAlumnoComponent;
  let fixture: ComponentFixture<PrincipalAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalAlumnoComponent]
    });
    fixture = TestBed.createComponent(PrincipalAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
