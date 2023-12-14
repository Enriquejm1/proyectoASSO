import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoMateriaComponent } from './contenido-materia.component';

describe('ContenidoMateriaComponent', () => {
  let component: ContenidoMateriaComponent;
  let fixture: ComponentFixture<ContenidoMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoMateriaComponent]
    });
    fixture = TestBed.createComponent(ContenidoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
