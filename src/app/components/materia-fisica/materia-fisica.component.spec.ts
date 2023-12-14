import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFisicaComponent } from './materia-fisica.component';

describe('MateriaFisicaComponent', () => {
  let component: MateriaFisicaComponent;
  let fixture: ComponentFixture<MateriaFisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaFisicaComponent]
    });
    fixture = TestBed.createComponent(MateriaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
