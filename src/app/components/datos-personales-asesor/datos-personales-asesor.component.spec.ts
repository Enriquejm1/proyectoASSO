import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesAsesorComponent } from './datos-personales-asesor.component';

describe('DatosPersonalesAsesorComponent', () => {
  let component: DatosPersonalesAsesorComponent;
  let fixture: ComponentFixture<DatosPersonalesAsesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosPersonalesAsesorComponent]
    });
    fixture = TestBed.createComponent(DatosPersonalesAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
