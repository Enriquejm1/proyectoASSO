import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias15Component } from './materias15.component';

describe('Materias15Component', () => {
  let component: Materias15Component;
  let fixture: ComponentFixture<Materias15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias15Component]
    });
    fixture = TestBed.createComponent(Materias15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
