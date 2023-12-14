import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materias5Component } from './materias5.component';

describe('Materias5Component', () => {
  let component: Materias5Component;
  let fixture: ComponentFixture<Materias5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materias5Component]
    });
    fixture = TestBed.createComponent(Materias5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
