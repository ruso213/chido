import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAllCategoriesComponent } from './check-all-categories.component';

describe('CheckAllCategoriesComponent', () => {
  let component: CheckAllCategoriesComponent;
  let fixture: ComponentFixture<CheckAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAllCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
