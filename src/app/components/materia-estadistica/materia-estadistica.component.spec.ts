import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaEstadisticaComponent } from './materia-estadistica.component';

describe('MateriaEstadisticaComponent', () => {
  let component: MateriaEstadisticaComponent;
  let fixture: ComponentFixture<MateriaEstadisticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaEstadisticaComponent]
    });
    fixture = TestBed.createComponent(MateriaEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
