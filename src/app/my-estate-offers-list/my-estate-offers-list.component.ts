import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-my-estate-offers-list',
  templateUrl: './my-estate-offers-list.component.html',
  styleUrls: ['./my-estate-offers-list.component.css']
})
export class MyEstateOffersListComponent implements OnInit {
  estateOffers: Array<EstateOffer>;
  constructor(private http: HttpClient) {
    this.estateOffers = new Array<EstateOffer>();
  }

  ngOnInit() {
  }

  getAllEstateOffers() {
    this.http.get(AppComponent.serverAddress + '/getAll').subscribe(responseData => {
      this.estateOffers = responseData.data;
      console.log(responseData);
      console.log(this.estateOffers);
    });
  }

}
class EstateOffer {
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
