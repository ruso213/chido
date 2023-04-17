import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCreateProductComponent } from './smart-create-product.component';

describe('SmartCreateProductComponent', () => {
  let component: SmartCreateProductComponent;
  let fixture: ComponentFixture<SmartCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCreateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
