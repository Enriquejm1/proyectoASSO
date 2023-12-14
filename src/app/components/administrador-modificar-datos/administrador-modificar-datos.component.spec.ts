import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorModificarDatosComponent } from './administrador-modificar-datos.component';

describe('AdministradorModificarDatosComponent', () => {
  let component: AdministradorModificarDatosComponent;
  let fixture: ComponentFixture<AdministradorModificarDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorModificarDatosComponent]
    });
    fixture = TestBed.createComponent(AdministradorModificarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
