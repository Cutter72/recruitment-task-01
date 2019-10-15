import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = false;
  @Output() newEstateOfferFormViewToggle = new EventEmitter();
  @Output() myEstateOffersViewToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleViewNewEstateOfferForm() {
    this.newEstateOfferFormViewToggle.emit();
  }

  toggleViewMyEstateOffers() {
    this.myEstateOffersViewToggle.emit();
  }
}
