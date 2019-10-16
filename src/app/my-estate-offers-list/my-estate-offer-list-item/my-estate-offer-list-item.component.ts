import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-estate-offer-list-item',
  templateUrl: './my-estate-offer-list-item.component.html',
  styleUrls: ['./my-estate-offer-list-item.component.css']
})
export class MyEstateOfferListItemComponent implements OnInit {
  @Input() estateOffer: EstateOffer;
  constructor() { }

  ngOnInit() {
  }

}

export class EstateOffer {
  id: number;
  city: string;
  street: string;
  property: string;
  apartment: string;
  price: number;
  type: number;
  description: string;

  constructor() {
  }
}
