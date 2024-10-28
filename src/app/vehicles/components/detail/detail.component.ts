import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  vehicle1: any;

  constructor(private vehicleService: VehicleService){
  }

  ngOnInit(): void {
    this.vehicle1 = this.vehicleService.getDetailVehicle();
  }

}
