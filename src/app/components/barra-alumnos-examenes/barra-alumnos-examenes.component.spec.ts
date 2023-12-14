import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAlumnosExamenesComponent } from './barra-alumnos-examenes.component';

describe('BarraAlumnosExamenesComponent', () => {
  let component: BarraAlumnosExamenesComponent;
  let fixture: ComponentFixture<BarraAlumnosExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraAlumnosExamenesComponent]
    });
    fixture = TestBed.createComponent(BarraAlumnosExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
