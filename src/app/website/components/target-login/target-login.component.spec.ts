import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetLoginComponent } from './target-login.component';

describe('TargetLoginComponent', () => {
  let component: TargetLoginComponent;
  let fixture: ComponentFixture<TargetLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
