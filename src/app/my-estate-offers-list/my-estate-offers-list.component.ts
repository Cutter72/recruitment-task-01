import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {showWarningOnce} from 'tslint/lib/error';
import {$} from 'protractor';

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
      if ((responseData as ResponseData).status === 'success') {
        this.estateOffers = (responseData as ResponseData).data;
        console.log(responseData);
        console.log(this.estateOffers);
      } else {
        alert('COś poszło nie tak!');
      }
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
class ResponseData {
  status: string;
  data: Array<EstateOffer>;
}
