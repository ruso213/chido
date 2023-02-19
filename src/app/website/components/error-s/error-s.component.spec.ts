import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSComponent } from './error-s.component';

describe('ErrorSComponent', () => {
  let component: ErrorSComponent;
  let fixture: ComponentFixture<ErrorSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
