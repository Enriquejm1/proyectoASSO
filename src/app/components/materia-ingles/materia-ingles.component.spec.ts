import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaInglesComponent } from './materia-ingles.component';

describe('MateriaInglesComponent', () => {
  let component: MateriaInglesComponent;
  let fixture: ComponentFixture<MateriaInglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaInglesComponent]
    });
    fixture = TestBed.createComponent(MateriaInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
