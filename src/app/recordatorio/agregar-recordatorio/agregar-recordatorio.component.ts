import { Component, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { EventEmitter } from 'stream';



@Component({
  selector: 'app-agregar-recordatorio',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    RouterOutlet
  ],
  templateUrl: './agregar-recordatorio.component.html',
  styleUrl: './agregar-recordatorio.component.css'
})
export class AgregarRecordatorioComponent {


}
