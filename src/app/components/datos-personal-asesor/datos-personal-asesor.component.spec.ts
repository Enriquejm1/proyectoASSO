import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalAsesorComponent } from './datos-personal-asesor.component';

describe('DatosPersonalAsesorComponent', () => {
  let component: DatosPersonalAsesorComponent;
  let fixture: ComponentFixture<DatosPersonalAsesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosPersonalAsesorComponent]
    });
    fixture = TestBed.createComponent(DatosPersonalAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
