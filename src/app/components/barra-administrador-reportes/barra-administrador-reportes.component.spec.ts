import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAdministradorReportesComponent } from './barra-administrador-reportes.component';

describe('BarraAdministradorReportesComponent', () => {
  let component: BarraAdministradorReportesComponent;
  let fixture: ComponentFixture<BarraAdministradorReportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraAdministradorReportesComponent]
    });
    fixture = TestBed.createComponent(BarraAdministradorReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
