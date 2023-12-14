import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDatosUsuarioComponent } from './administrador-datos-usuario.component';

describe('AdministradorDatosUsuarioComponent', () => {
  let component: AdministradorDatosUsuarioComponent;
  let fixture: ComponentFixture<AdministradorDatosUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorDatosUsuarioComponent]
    });
    fixture = TestBed.createComponent(AdministradorDatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
