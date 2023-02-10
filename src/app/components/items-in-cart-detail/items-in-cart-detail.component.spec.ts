import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInCartDetailComponent } from './items-in-cart-detail.component';

describe('ItemsInCartDetailComponent', () => {
  let component: ItemsInCartDetailComponent;
  let fixture: ComponentFixture<ItemsInCartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsInCartDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsInCartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
