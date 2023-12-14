import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionExamenComponent } from './introduccion-examen.component';

describe('IntroduccionExamenComponent', () => {
  let component: IntroduccionExamenComponent;
  let fixture: ComponentFixture<IntroduccionExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroduccionExamenComponent]
    });
    fixture = TestBed.createComponent(IntroduccionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
