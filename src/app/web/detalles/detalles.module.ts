import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './componente/detalles/detalles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    CommonModule,
    DetallesRoutingModule,
    SharedModule
  ]
})
export class DetallesModule { }
