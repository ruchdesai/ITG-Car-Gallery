import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarService } from '../../../services/car-service/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carService.getCar(params.id).subscribe((data) => {
        this.car = data;
      });
    });
  }
}
