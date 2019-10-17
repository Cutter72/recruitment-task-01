import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  typeOfOffer() {
    if (this.estateOffer.type == 1) {
      return 'assets/house.png';
    } else if (this.estateOffer.type == 2) {
      return 'assets/flat.png';
    } else if (this.estateOffer.type == 3) {
      return 'assets/office.png';
    }
    return 'assets/room.png';
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
