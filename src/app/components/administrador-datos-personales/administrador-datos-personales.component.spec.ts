import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDatosPersonalesComponent } from './administrador-datos-personales.component';

describe('AdministradorDatosPersonalesComponent', () => {
  let component: AdministradorDatosPersonalesComponent;
  let fixture: ComponentFixture<AdministradorDatosPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorDatosPersonalesComponent]
    });
    fixture = TestBed.createComponent(AdministradorDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
