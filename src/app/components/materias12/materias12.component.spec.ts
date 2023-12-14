import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias12Component } from './materias12.component';

describe('Materias12Component', () => {
  let component: Materias12Component;
  let fixture: ComponentFixture<Materias12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias12Component]
    });
    fixture = TestBed.createComponent(Materias12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
