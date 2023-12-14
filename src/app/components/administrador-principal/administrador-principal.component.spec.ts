import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorPrincipalComponent } from './administrador-principal.component';

describe('AdministradorPrincipalComponent', () => {
  let component: AdministradorPrincipalComponent;
  let fixture: ComponentFixture<AdministradorPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorPrincipalComponent]
    });
    fixture = TestBed.createComponent(AdministradorPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
