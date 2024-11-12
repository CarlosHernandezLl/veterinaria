import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

//Para el componente de recordatorio
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recordatorio',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    RouterOutlet

  ],
  templateUrl: './recordatorio.component.html',
  styleUrl: './recordatorio.component.css',

})
export class RecordatorioComponent {

  title = 'Firulais';
  day: string;
  text = 'Recordatorio de la tarea';
  places: string[] = [
    'Calle',
    'Salud',
    'Otro'
  ]

  hour_day: string[] = [
    'Mañana',
    'Tarde',
    'Noche'
  ]

  constructor(private router: Router) {
    const date = new Date();
    const formatOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    this.day = date.toLocaleDateString('es-ES', formatOptions);
  }

  navegarAgregarRecordatorio() {
    this.router.navigate(['recordatorio/agregar-recordatorio']);
  }

}
