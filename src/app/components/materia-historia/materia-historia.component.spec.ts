import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaHistoriaComponent } from './materia-historia.component';

describe('MateriaHistoriaComponent', () => {
  let component: MateriaHistoriaComponent;
  let fixture: ComponentFixture<MateriaHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaHistoriaComponent]
    });
    fixture = TestBed.createComponent(MateriaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
