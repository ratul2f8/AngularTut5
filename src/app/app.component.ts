import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  date = '';
  currency = '';
  number = '';
  mileage = '';
  weight = 0;

  car = {
    brand: "BMW",
    model: "M2 CS",
    year: "2020"
  }

  onNameChange(event: Event){
    let value = (<HTMLInputElement>event.target).value;
    this.name = value;
  }
  onDateChange(event: Event){
    let value = (<HTMLInputElement>event.target).value;
    this.date = value;
  }
  onCurrencyChange(event: Event){
    let value = (<HTMLInputElement>event.target).value;
    this.currency = value;
  }
  onNumberChange(event: Event){
    let value = (<HTMLInputElement>event.target).value;
    this.number = value;
  }
  onMileageChange(event: Event){
    let value = (<HTMLInputElement>event.target).value;
    this.mileage = value;
  }
  onWeightChange(event: Event){
    let value = +(<HTMLInputElement>event.target).value;
    this.weight = value;
  }
}
