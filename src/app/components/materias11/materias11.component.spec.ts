import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias11Component } from './materias11.component';

describe('Materias11Component', () => {
  let component: Materias11Component;
  let fixture: ComponentFixture<Materias11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias11Component]
    });
    fixture = TestBed.createComponent(Materias11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
