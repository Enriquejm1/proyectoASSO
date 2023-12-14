import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDatosPersonalesComponent } from './alumno-datos-personales.component';

describe('AlumnoDatosPersonalesComponent', () => {
  let component: AlumnoDatosPersonalesComponent;
  let fixture: ComponentFixture<AlumnoDatosPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoDatosPersonalesComponent]
    });
    fixture = TestBed.createComponent(AlumnoDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
