import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {EstateOffer} from './my-estate-offer-list-item/my-estate-offer-list-item.component';

@Component({
  selector: 'app-my-estate-offers-list',
  templateUrl: './my-estate-offers-list.component.html',
  styleUrls: ['./my-estate-offers-list.component.css']
})
export class MyEstateOffersListComponent implements OnInit {
  @Input() estateOffers: Array<EstateOffer>;
  @Output() itemClick = new EventEmitter<EstateOffer>();
  sortByCityAsc = true;
  sortByPriceAsc = true;
  sortByStreetAsc = true;
  constructor(private http: HttpClient) {
    this.estateOffers = new Array<EstateOffer>();
  }

  ngOnInit() {
    this.getAllEstateOffers();
  }

  getAllEstateOffers() {
    this.http.get(AppComponent.serverAddress + '/getAll').subscribe(responseData => {
      if ((responseData as ResponseData).status === 'success') {
        this.estateOffers = (responseData as ResponseData).data;
      } else {
        alert('Coś poszło nie tak!');
      }
    });
  }

  passOfferId(id: number) {
    for (let i = 0; i < this.estateOffers.length; i++) {
      if (this.estateOffers[i].id === id) {
        this.itemClick.emit(this.estateOffers[i]);
      }
    }
  }

  sortByCity() {
    if (this.sortByCityAsc) {
      this.estateOffers.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0));
    } else {
      this.estateOffers.sort((a, b) => (a.city > b.city) ? -1 : ((b.city > a.city) ? 1 : 0));
    }
    this.sortByCityAsc = !this.sortByCityAsc;
  }

  sortByPrice() {
    if (this.sortByPriceAsc) {
      this.estateOffers.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else {
      this.estateOffers.sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
    }
    this.sortByPriceAsc = !this.sortByPriceAsc;
  }

  sortByStreet() {
    if (this.sortByStreetAsc) {
      this.estateOffers.sort((a, b) => (a.street > b.street) ? 1 : ((b.street > a.street) ? -1 : 0));
    } else {
      this.estateOffers.sort((a, b) => (a.street > b.street) ? -1 : ((b.street > a.street) ? 1 : 0));
    }
    this.sortByStreetAsc = !this.sortByStreetAsc;
  }

  sortByType() {
    if (this.sortByStreetAsc) {
      this.estateOffers.sort((a, b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0));
    } else {
      this.estateOffers.sort((a, b) => (a.type > b.type) ? -1 : ((b.type > a.type) ? 1 : 0));
    }
    this.sortByStreetAsc = !this.sortByStreetAsc;
  }

  deleteAllOffers() {
    if (confirm('Na pewno chcesz usunąć WSZYSTKIE oferty?')) {
      this.http.post(AppComponent.serverAddress + '/deleteAll', {})
        .subscribe(responseData => {
          console.log(responseData);
        });
      this.estateOffers = null;
    }
  }
}

class ResponseData {
  status: string;
  data: Array<EstateOffer>;
}
