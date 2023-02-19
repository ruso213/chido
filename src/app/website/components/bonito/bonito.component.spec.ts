import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonitoComponent } from './bonito.component';

describe('BonitoComponent', () => {
  let component: BonitoComponent;
  let fixture: ComponentFixture<BonitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
