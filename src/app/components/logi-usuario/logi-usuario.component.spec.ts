import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiUsuarioComponent } from './logi-usuario.component';

describe('LogiUsuarioComponent', () => {
  let component: LogiUsuarioComponent;
  let fixture: ComponentFixture<LogiUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogiUsuarioComponent]
    });
    fixture = TestBed.createComponent(LogiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
