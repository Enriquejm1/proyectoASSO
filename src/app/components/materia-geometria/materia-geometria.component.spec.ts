import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaGeometriaComponent } from './materia-geometria.component';

describe('MateriaGeometriaComponent', () => {
  let component: MateriaGeometriaComponent;
  let fixture: ComponentFixture<MateriaGeometriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaGeometriaComponent]
    });
    fixture = TestBed.createComponent(MateriaGeometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
