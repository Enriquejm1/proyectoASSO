import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPersonalComponent } from './contenido-personal.component';

describe('ContenidoPersonalComponent', () => {
  let component: ContenidoPersonalComponent;
  let fixture: ComponentFixture<ContenidoPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoPersonalComponent]
    });
    fixture = TestBed.createComponent(ContenidoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
