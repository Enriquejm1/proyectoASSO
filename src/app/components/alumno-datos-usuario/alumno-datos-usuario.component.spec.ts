import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDatosUsuarioComponent } from './alumno-datos-usuario.component';

describe('AlumnoDatosUsuarioComponent', () => {
  let component: AlumnoDatosUsuarioComponent;
  let fixture: ComponentFixture<AlumnoDatosUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoDatosUsuarioComponent]
    });
    fixture = TestBed.createComponent(AlumnoDatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
