import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAlumnosComponent } from './add-edit-alumnos.component';

describe('AddEditAlumnosComponent', () => {
  let component: AddEditAlumnosComponent;
  let fixture: ComponentFixture<AddEditAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAlumnosComponent]
    });
    fixture = TestBed.createComponent(AddEditAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
