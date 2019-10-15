import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewEstateOfferComponent } from './new-estate-offer/new-estate-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewEstateOfferComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
