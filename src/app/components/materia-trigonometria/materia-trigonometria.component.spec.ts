import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaTrigonometriaComponent } from './materia-trigonometria.component';

describe('MateriaTrigonometriaComponent', () => {
  let component: MateriaTrigonometriaComponent;
  let fixture: ComponentFixture<MateriaTrigonometriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaTrigonometriaComponent]
    });
    fixture = TestBed.createComponent(MateriaTrigonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
