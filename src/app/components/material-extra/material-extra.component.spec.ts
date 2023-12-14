import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExtraComponent } from './material-extra.component';

describe('MaterialExtraComponent', () => {
  let component: MaterialExtraComponent;
  let fixture: ComponentFixture<MaterialExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialExtraComponent]
    });
    fixture = TestBed.createComponent(MaterialExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
