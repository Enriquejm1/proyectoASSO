import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExtraPrincipalComponent } from './material-extra-principal.component';

describe('MaterialExtraPrincipalComponent', () => {
  let component: MaterialExtraPrincipalComponent;
  let fixture: ComponentFixture<MaterialExtraPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialExtraPrincipalComponent]
    });
    fixture = TestBed.createComponent(MaterialExtraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
