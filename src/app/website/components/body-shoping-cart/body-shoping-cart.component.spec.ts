import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyShopingCartComponent } from './body-shoping-cart.component';

describe('BodyShopingCartComponent', () => {
  let component: BodyShopingCartComponent;
  let fixture: ComponentFixture<BodyShopingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyShopingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
