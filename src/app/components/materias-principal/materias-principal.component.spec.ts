import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasPrincipalComponent } from './materias-principal.component';

describe('MateriasPrincipalComponent', () => {
  let component: MateriasPrincipalComponent;
  let fixture: ComponentFixture<MateriasPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriasPrincipalComponent]
    });
    fixture = TestBed.createComponent(MateriasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
