import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EstateOffer} from '../my-estate-offers-list/my-estate-offer-list-item/my-estate-offer-list-item.component';
import {OfferToShow} from '../app.component';

@Component({
  selector: 'app-estate-offer-details',
  templateUrl: './estate-offer-details.component.html',
  styleUrls: ['./estate-offer-details.component.css']
})
export class EstateOfferDetailsComponent implements OnInit, OnChanges {
  @Input() details: OfferToShow;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
    this.details = new OfferToShow(new EstateOffer(), false, false);
    this.details.estateOffer.city = '';
    this.details.estateOffer.street = '';
    this.details.estateOffer.property = '';
    this.details.estateOffer.apartment = '';
    this.details.estateOffer.price = null;
    this.details.estateOffer.type = null;
    this.details.estateOffer.description = '';
  }


  unlockToggle() {
    if (this.details.loaded === true) {
      if (this.details.unlocked === true) {
        this.ngOnInit();
      } else {
        this.details.unlocked = !this.details.unlocked;
      }
    }
  }
}
