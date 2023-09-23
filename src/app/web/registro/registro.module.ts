import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './componente/registro/registro.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RegistroModule { }
