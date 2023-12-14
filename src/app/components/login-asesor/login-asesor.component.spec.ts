import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsesorComponent } from './login-asesor.component';

describe('LoginAsesorComponent', () => {
  let component: LoginAsesorComponent;
  let fixture: ComponentFixture<LoginAsesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsesorComponent]
    });
    fixture = TestBed.createComponent(LoginAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
