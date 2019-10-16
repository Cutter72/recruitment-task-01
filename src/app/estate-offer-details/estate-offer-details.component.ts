import {Component, Input, OnInit} from '@angular/core';
import {EstateOffer} from '../my-estate-offers-list/my-estate-offer-list-item/my-estate-offer-list-item.component';

@Component({
  selector: 'app-estate-offer-details',
  templateUrl: './estate-offer-details.component.html',
  styleUrls: ['./estate-offer-details.component.css']
})
export class EstateOfferDetailsComponent implements OnInit {
  @Input() offer: EstateOffer;
  constructor() {

  }

  ngOnInit() {
    this.offer = new EstateOffer();
    this.offer.city = '';
    this.offer.street = '';
    this.offer.property = '';
    this.offer.apartment = '';
    this.offer.price = null;
    this.offer.type = null;
    this.offer.description = '';
  }

}
