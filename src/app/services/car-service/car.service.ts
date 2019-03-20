import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CarService {

    API_URL = environment.API_ENDPOINT;
    GET_ALL_CARS = this.API_URL + '/api/vehicles/';
    GET_CAR_DETAIL = this.API_URL + '/api/vehicle/'

    constructor(private http: HttpClient) { }

    getCars(): Observable<any> {
        return this.http.get(this.GET_ALL_CARS);
    }

    getCar(id): Observable<any> {
        return this.http.get(this.GET_CAR_DETAIL + id)
    }
}