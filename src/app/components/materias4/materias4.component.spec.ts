import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias4Component } from './materias4.component';

describe('Materias4Component', () => {
  let component: Materias4Component;
  let fixture: ComponentFixture<Materias4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias4Component]
    });
    fixture = TestBed.createComponent(Materias4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
