import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaQuimicaComponent } from './materia-quimica.component';

describe('MateriaQuimicaComponent', () => {
  let component: MateriaQuimicaComponent;
  let fixture: ComponentFixture<MateriaQuimicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaQuimicaComponent]
    });
    fixture = TestBed.createComponent(MateriaQuimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
