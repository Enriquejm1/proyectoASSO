import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaSpanishComponent } from './materia-spanish.component';

describe('MateriaSpanishComponent', () => {
  let component: MateriaSpanishComponent;
  let fixture: ComponentFixture<MateriaSpanishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaSpanishComponent]
    });
    fixture = TestBed.createComponent(MateriaSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
