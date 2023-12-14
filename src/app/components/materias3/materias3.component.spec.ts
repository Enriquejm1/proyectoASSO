import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias3Component } from './materias3.component';

describe('Materias3Component', () => {
  let component: Materias3Component;
  let fixture: ComponentFixture<Materias3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias3Component]
    });
    fixture = TestBed.createComponent(Materias3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
