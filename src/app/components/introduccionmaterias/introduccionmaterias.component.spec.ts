import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionmateriasComponent } from './introduccionmaterias.component';

describe('IntroduccionmateriasComponent', () => {
  let component: IntroduccionmateriasComponent;
  let fixture: ComponentFixture<IntroduccionmateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroduccionmateriasComponent]
    });
    fixture = TestBed.createComponent(IntroduccionmateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
