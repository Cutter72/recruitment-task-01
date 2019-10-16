import { Component } from '@angular/core';
import {EstateOffer} from './my-estate-offers-list/my-estate-offer-list-item/my-estate-offer-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static readonly serverAddress = 'https://alfa.propertygrouppoland.pl/q/paweldrelich';
  toggleViewNewEstateOfferForm = {isActive: false};
  toggleViewMyEstateOffers = {isActive: false};
  offerToShow: EstateOffer;

  showDetails(estateOfferToShow: EstateOffer) {
    this.offerToShow = estateOfferToShow;
  }
}
