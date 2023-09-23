import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {  MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule
    
    
  ],
  exports:[
    MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
