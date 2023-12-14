import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFinalPrincipalComponent } from './examen-final-principal.component';

describe('ExamenFinalPrincipalComponent', () => {
  let component: ExamenFinalPrincipalComponent;
  let fixture: ComponentFixture<ExamenFinalPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenFinalPrincipalComponent]
    });
    fixture = TestBed.createComponent(ExamenFinalPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
