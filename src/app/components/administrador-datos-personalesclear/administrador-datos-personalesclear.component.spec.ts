import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDatosPersonalesclearComponent } from './administrador-datos-personalesclear.component';

describe('AdministradorDatosPersonalesclearComponent', () => {
  let component: AdministradorDatosPersonalesclearComponent;
  let fixture: ComponentFixture<AdministradorDatosPersonalesclearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorDatosPersonalesclearComponent]
    });
    fixture = TestBed.createComponent(AdministradorDatosPersonalesclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
