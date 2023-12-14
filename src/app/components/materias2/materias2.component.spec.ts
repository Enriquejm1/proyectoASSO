import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias2Component } from './materias2.component';

describe('Materias2Component', () => {
  let component: Materias2Component;
  let fixture: ComponentFixture<Materias2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias2Component]
    });
    fixture = TestBed.createComponent(Materias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
