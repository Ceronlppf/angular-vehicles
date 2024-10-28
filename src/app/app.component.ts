import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from './vehicles/components/detail/detail.component';
import { VehiclesModule } from './vehicles/vehicles.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiclesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehicles';
}
