import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import {Car} from '../car';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carService : CarService) {
    this.getCars();
 }
  ngOnInit(): void {
  }
  getCars(): void {
    this.cars = this.carService.getCars();
}
}
