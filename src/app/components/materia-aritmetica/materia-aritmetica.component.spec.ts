import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAritmeticaComponent } from './materia-aritmetica.component';

describe('MateriaAritmeticaComponent', () => {
  let component: MateriaAritmeticaComponent;
  let fixture: ComponentFixture<MateriaAritmeticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaAritmeticaComponent]
    });
    fixture = TestBed.createComponent(MateriaAritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
