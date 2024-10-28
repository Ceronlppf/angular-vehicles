import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getDetailVehicle (): any{
    const vehicle1: Vehicle = {
      id: 1,
      vin: '123456kf',
      placa: 'nzf4466',
      modelo: '1999',
      estatus: 'ACTIVO'
    };
    return vehicle1;
  }
}
