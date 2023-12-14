import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaBiologiaComponent } from './materia-biologia.component';

describe('MateriaBiologiaComponent', () => {
  let component: MateriaBiologiaComponent;
  let fixture: ComponentFixture<MateriaBiologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaBiologiaComponent]
    });
    fixture = TestBed.createComponent(MateriaBiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
