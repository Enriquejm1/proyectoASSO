import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosModificarAsesorComponent } from './datos-modificar-asesor.component';

describe('DatosModificarAsesorComponent', () => {
  let component: DatosModificarAsesorComponent;
  let fixture: ComponentFixture<DatosModificarAsesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosModificarAsesorComponent]
    });
    fixture = TestBed.createComponent(DatosModificarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
