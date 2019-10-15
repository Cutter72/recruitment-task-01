import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewEstateOfferFormComponent } from './new-estate-offer-form/new-estate-offer-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyEstateOffersListComponent } from './my-estate-offers-list/my-estate-offers-list.component';
import { EstateOfferDetailsComponent } from './estate-offer-details/estate-offer-details.component';
import { MyEstateOfferListItemComponent } from './my-estate-offers-list/my-estate-offer-list-item/my-estate-offer-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewEstateOfferFormComponent,
    MyEstateOffersListComponent,
    EstateOfferDetailsComponent,
    MyEstateOfferListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
