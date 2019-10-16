import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {EstateOffer} from '../my-estate-offers-list/my-estate-offer-list-item/my-estate-offer-list-item.component';
import {AppComponent, OfferToShow} from '../app.component';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-estate-offer-details',
  templateUrl: './estate-offer-details.component.html',
  styleUrls: ['./estate-offer-details.component.css']
})
export class EstateOfferDetailsComponent implements OnInit, OnChanges {
  @Input() details: OfferToShow;
  @ViewChild('f', {static: true}) signedForm: NgForm;

  constructor(private http: HttpClient) {

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
    this.cloneLoadedValuesToForm();
    this.signedForm.form.updateValueAndValidity();
  }

  onSubmit() {
    this.cloneValuesToEstateOffer();
    this.postUpdate();
  }

  private cloneLoadedValuesToForm() {
    this.signedForm.setValue({
      city: this.details.estateOffer.city,
      street: this.details.estateOffer.street,
      property: this.details.estateOffer.property,
      apartment: this.details.estateOffer.apartment,
      price: this.details.estateOffer.price,
      type: this.details.estateOffer.type,
      description: this.details.estateOffer.description
    });
  }

  private cloneValuesToEstateOffer() {
    this.details.estateOffer.city = this.signedForm.value.city;
    this.details.estateOffer.street = this.signedForm.value.street;
    this.details.estateOffer.property = this.signedForm.value.property;
    this.details.estateOffer.apartment = this.signedForm.value.apartment;
    this.details.estateOffer.price = this.signedForm.value.price;
    this.details.estateOffer.type = this.signedForm.value.type;
    this.details.estateOffer.description = this.signedForm.value.description;
  }

  postUpdate() {
    this.http.post(AppComponent.serverAddress + '/update', this.details.estateOffer)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  postDelete() {
    this.http.post(AppComponent.serverAddress + '/delete/' + this.details.estateOffer.id, {})
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
