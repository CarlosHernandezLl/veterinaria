import { Routes } from '@angular/router';
import { RecordatorioComponent } from "./recordatorio/recordatorio.component";
import { AgregarRecordatorioComponent } from "./recordatorio/agregar-recordatorio/agregar-recordatorio.component";
import path from 'path';

export const routes: Routes = [

    {
        path: 'recordatorio',
        component: RecordatorioComponent,
    },
    {
        path: 'recordatorio/agregar-recordatorio',
        component: AgregarRecordatorioComponent,
    }

];
