import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalDisponibleComponent } from './sucursal-disponible.component';

describe('SucursalDisponibleComponent', () => {
  let component: SucursalDisponibleComponent;
  let fixture: ComponentFixture<SucursalDisponibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalDisponibleComponent]
    });
    fixture = TestBed.createComponent(SucursalDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
