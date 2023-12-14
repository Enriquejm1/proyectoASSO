import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaExamenesComponent } from './materia-examenes.component';

describe('MateriaExamenesComponent', () => {
  let component: MateriaExamenesComponent;
  let fixture: ComponentFixture<MateriaExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaExamenesComponent]
    });
    fixture = TestBed.createComponent(MateriaExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
