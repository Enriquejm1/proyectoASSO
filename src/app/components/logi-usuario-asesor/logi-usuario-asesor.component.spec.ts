import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiUsuarioAsesorComponent } from './logi-usuario-asesor.component';

describe('LogiUsuarioAsesorComponent', () => {
  let component: LogiUsuarioAsesorComponent;
  let fixture: ComponentFixture<LogiUsuarioAsesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogiUsuarioAsesorComponent]
    });
    fixture = TestBed.createComponent(LogiUsuarioAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
