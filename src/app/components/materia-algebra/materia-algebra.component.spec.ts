import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAlgebraComponent } from './materia-algebra.component';

describe('MateriaAlgebraComponent', () => {
  let component: MateriaAlgebraComponent;
  let fixture: ComponentFixture<MateriaAlgebraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaAlgebraComponent]
    });
    fixture = TestBed.createComponent(MateriaAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
