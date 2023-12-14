import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaProbabilidadComponent } from './materia-probabilidad.component';

describe('MateriaProbabilidadComponent', () => {
  let component: MateriaProbabilidadComponent;
  let fixture: ComponentFixture<MateriaProbabilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaProbabilidadComponent]
    });
    fixture = TestBed.createComponent(MateriaProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
