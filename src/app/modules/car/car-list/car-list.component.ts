import { Component } from '@angular/core';
import { CarService } from '../../../services/car-service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars: any;
  car_name: string = 'JAGUAR';

  constructor(private carService: CarService) {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}
