import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnLoadMoreComponent } from './bttn-load-more.component';

describe('BttnLoadMoreComponent', () => {
  let component: BttnLoadMoreComponent;
  let fixture: ComponentFixture<BttnLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BttnLoadMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BttnLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
