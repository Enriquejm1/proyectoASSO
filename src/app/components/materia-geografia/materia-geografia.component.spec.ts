import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaGeografiaComponent } from './materia-geografia.component';

describe('MateriaGeografiaComponent', () => {
  let component: MateriaGeografiaComponent;
  let fixture: ComponentFixture<MateriaGeografiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaGeografiaComponent]
    });
    fixture = TestBed.createComponent(MateriaGeografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
