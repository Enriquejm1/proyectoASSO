import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosusuarioComponent } from './datosusuario.component';

describe('DatosusuarioComponent', () => {
  let component: DatosusuarioComponent;
  let fixture: ComponentFixture<DatosusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosusuarioComponent]
    });
    fixture = TestBed.createComponent(DatosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
