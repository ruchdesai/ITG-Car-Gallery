import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';

import { CarListComponent } from './car-list.component';
import { CarService } from '../../../services/car-service/car.service';

const MockCarsList = [
	{
		'id': 'xe',
		'modelYear': 'k17',
		'url': '/api/vehicle/xe',
		'media': [
			{
				'name': 'vehicle',
				'url': '/images/xe_k17.jpg'
			}
		]
	},
	{
		'id': 'xf',
		'modelYear': 'k17',
		'url': '/api/vehicle/xf',
		'media': [
			{
				'name': 'vehicle',
				'url': '/images/xf_k17.jpg'
			}
		]
	},
	{
		'id': 'xj',
		'modelYear': 'k16',
		'url': '/api/vehicle/xj',
		'media': [
			{
				'name': 'vehicle',
				'url': '/images/xj_k16.jpg'
			}
		]
	},
	{
		'id': 'fpace',
		'modelYear': 'k17',
		'url': '/api/vehicle/fpace',
		'media': [
			{
				'name': 'vehicle',
				'url': '/images/fpace_k17.jpg'
			}
		]
	},
	{
		'id': 'ftype',
		'modelYear': 'k17',
		'url': '/api/vehicle/ftype',
		'media': [
			{
				'name': 'vehicle',
				'url': '/images/ftype_k17.jpg'
			}
		]
	}
];

describe('CarListComponent', () => {
	let carService;
	let component: CarListComponent;
	let fixture: ComponentFixture<CarListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule, HttpClientTestingModule ],
			declarations: [ CarListComponent ],
			providers: [ CarService ]
		}).compileComponents();
	}));

	beforeEach(inject([CarService], c => {
		carService = c;
		fixture = TestBed.createComponent(CarListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call getCars and return list of cars', async(() => {
		const response = MockCarsList;
		spyOn(carService, 'getCars').and.returnValue(of(response))
		component.getCars();
		expect(component.cars).toEqual(response);
	}));
});
