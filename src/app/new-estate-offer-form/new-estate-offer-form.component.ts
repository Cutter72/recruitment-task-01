import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-new-estate-offer',
  templateUrl: './new-estate-offer-form.component.html',
  styleUrls: ['./new-estate-offer-form.component.css']
})
export class NewEstateOfferFormComponent implements OnInit {
  newEstateOffer: NewEstateOffer;
  @ViewChild('f', {static: true}) signedForm: NgForm;

  constructor(private http: HttpClient) {
    this.newEstateOffer = new NewEstateOffer();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.signedForm.valid) {
      this.newEstateOffer.city = this.signedForm.value.city;
      this.newEstateOffer.street = this.signedForm.value.street;
      this.newEstateOffer.property = this.signedForm.value.property;
      this.newEstateOffer.apartment = this.signedForm.value.apartment;
      this.newEstateOffer.price = this.signedForm.value.price;
      this.newEstateOffer.type = this.signedForm.value.type;
      this.newEstateOffer.description = this.signedForm.value.description;
      console.log(this.newEstateOffer);
      this.postNewEstateOffer();
    }
  }

  postNewEstateOffer() {
    this.http.post(AppComponent.serverAddress + '/create', this.newEstateOffer)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}

class NewEstateOffer {
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

