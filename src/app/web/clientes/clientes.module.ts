import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './componente/clientes/clientes.component';

import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class ClientesModule { }
