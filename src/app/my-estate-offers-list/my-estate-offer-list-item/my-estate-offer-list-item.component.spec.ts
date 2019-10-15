import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEstateOfferListItemComponent } from './my-estate-offer-list-item.component';

describe('MyEstateOfferListItemComponent', () => {
  let component: MyEstateOfferListItemComponent;
  let fixture: ComponentFixture<MyEstateOfferListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEstateOfferListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEstateOfferListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
