import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static serverAddress = 'https://alfa.propertygrouppoland.pl/q/paweldrelich';
  toggleViewNewEstateOfferForm = {isActive: false};
  toggleViewMyEstateOffers = {isActive: false};
}
