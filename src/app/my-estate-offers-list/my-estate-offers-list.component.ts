import {Component, Input, OnInit, Output} from '@angular/core';
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

class ResponseData {
  status: string;
  data: Array<EstateOffer>;
}
