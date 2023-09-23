import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from '../shared/componentes/filtro/filtro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotonVolverComponent } from './componentes/boton-volver/boton-volver.component';
import { ExportarComponent } from './componentes/exportar/exportar.component';
import { MatTableExporterModule } from 'mat-table-exporter';



@NgModule({
  declarations: [FiltroComponent, BotonVolverComponent, ExportarComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule,MatTableExporterModule],
  exports:[FiltroComponent,MaterialModule,BotonVolverComponent,ExportarComponent,MatTableExporterModule]
})
export class SharedModule {}
