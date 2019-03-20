import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';

import { CarDetailComponent } from './car-detail.component';
import { CarService } from '../../../services/car-service/car.service';

const MockCarDetail = {
  'id': 'xf',
  'description': 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
  'price': '£36,000',
  'meta': {
    'passengers': 5,
    'drivetrain': [
      'AWD',
      'RWD'
    ],
    'bodystyles': [
      'saloon'
    ],
    'emissions': {
      'template': 'CO2 Emissions $value g/km',
      'value': 104
    }
  }
};

describe('CarDetailComponent', () => {
  let carService;
  let component: CarDetailComponent;
  let fixture: ComponentFixture<CarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ CarDetailComponent ],
      providers: [ CarService ]
    }).compileComponents();
  }));

  beforeEach(inject([CarService], c => {
		carService = c;
		fixture = TestBed.createComponent(CarDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit and return car detail', async(() => {
		const response = MockCarDetail;
		spyOn(carService, 'getCar').and.returnValue(of(response))
		component.ngOnInit();
		expect(component.car).toEqual(response);
	}));
});
