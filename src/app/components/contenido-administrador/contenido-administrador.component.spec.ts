import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAdministradorComponent } from './contenido-administrador.component';

describe('ContenidoAdministradorComponent', () => {
  let component: ContenidoAdministradorComponent;
  let fixture: ComponentFixture<ContenidoAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoAdministradorComponent]
    });
    fixture = TestBed.createComponent(ContenidoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
