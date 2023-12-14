import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDatosPersonalComponent } from './administrador-datos-personal.component';

describe('AdministradorDatosPersonalComponent', () => {
  let component: AdministradorDatosPersonalComponent;
  let fixture: ComponentFixture<AdministradorDatosPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorDatosPersonalComponent]
    });
    fixture = TestBed.createComponent(AdministradorDatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
