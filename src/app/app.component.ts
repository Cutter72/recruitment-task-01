import { Component } from '@angular/core';
import {EstateOffer} from './my-estate-offers-list/my-estate-offer-list-item/my-estate-offer-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static readonly serverAddress = 'https://alfa.propertygrouppoland.pl/q/paweldrelich';
  offerToShow: OfferToShow;

  showDetails(estateOfferToShow: EstateOffer) {
    this.offerToShow = new OfferToShow(estateOfferToShow, true, false);
  }
}

export class OfferToShow {
  estateOffer: EstateOffer;
  loaded: boolean;
  unlocked: boolean;

  constructor(estateOffer: EstateOffer, loaded: boolean, unlocked: boolean) {
    this.estateOffer = estateOffer;
    this.loaded = loaded;
    this.unlocked = unlocked;
  }
}
