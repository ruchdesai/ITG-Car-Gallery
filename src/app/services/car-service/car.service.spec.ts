import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

const MockCarsList = [
    {
        'id':'xe',
        'modelYear':'k17',
        'url':'/api/vehicle/xe',
        'media':[
            {
                'name':'vehicle',
                'url':'/images/xe_k17.jpg'
            }
        ]
    },
    {
        'id':'xf',
        'modelYear':'k17',
        'url':'/api/vehicle/xf',
        'media':[
            {
                'name':'vehicle',
                'url':'/images/xf_k17.jpg'
            }
        ]
    },
    {
        'id':'xj',
        'modelYear':'k16',
        'url':'/api/vehicle/xj',
        'media':[
            {
                'name':'vehicle',
                'url':'/images/xj_k16.jpg'
            }
        ]
    },
    {
        'id':'fpace',
        'modelYear':'k17',
        'url':'/api/vehicle/fpace',
        'media':[
            {
                'name':'vehicle',
                'url':'/images/fpace_k17.jpg'
            }
        ]
    },
    {
        'id':'ftype',
        'modelYear':'k17',
        'url':'/api/vehicle/ftype',
        'media':[
            {
                'name':'vehicle',
                'url':'/images/ftype_k17.jpg'
            }
        ]
    }
];

const MockCarDetail = {
    'id':'xf',
    'description':'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
    'price':'£36,000',
    'meta':{
        'passengers':5,
        'drivetrain':[
            'AWD',
            'RWD'
        ],
        'bodystyles':[
            'saloon'
        ],
        'emissions':{
            'template':'CO2 Emissions $value g/km',
            'value':104
        }
    }
};

describe('CarService', () => {
    let httpMock: HttpTestingController;
    let carService: CarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ CarService ]
        });

        carService = TestBed.get(CarService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('getCars() should http GET cars list', () => {
        const cars = MockCarsList;

        carService.getCars().subscribe((res) => {
            expect(res).toEqual(cars);
        });

        const req = httpMock.expectOne('https://itg-prd-recruit.appspot.com/api/vehicles/');
        expect(req.request.method).toEqual('GET');
        req.flush(cars);

        httpMock.verify();
    });

    it('getCar() should http GET car by id "xf"', () => {
        const car = MockCarDetail;

        carService.getCar('xf').subscribe((res) => {
            expect(res).toEqual(car);
        });

        const req = httpMock.expectOne('https://itg-prd-recruit.appspot.com/api/vehicle/xf');
        expect(req.request.method).toEqual('GET');
        req.flush(car);

        httpMock.verify();
    });
});
