import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionAlumnoComponent } from './introduccion-alumno.component';

describe('IntroduccionAlumnoComponent', () => {
  let component: IntroduccionAlumnoComponent;
  let fixture: ComponentFixture<IntroduccionAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroduccionAlumnoComponent]
    });
    fixture = TestBed.createComponent(IntroduccionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
