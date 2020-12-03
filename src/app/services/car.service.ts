import { Injectable } from '@angular/core';
import {Car} from '../car';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  getCars(){
    return[
        new Car(1, 'Jaguar'),
        new Car(13, 'BMW'),
        new Car(15, 'Ferrari'),
        new Car(20, 'Lamborghini')
    ];
}
}
