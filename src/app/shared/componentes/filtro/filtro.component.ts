import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SucursalesService } from 'src/app/core/services/sucursales.service';
import { Sucursales } from '../../models/sucursales.interface';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FiltroComponent),
      multi: true,
    },
  ],
})
export class FiltroComponent implements OnInit, ControlValueAccessor {


  sucursal: number = 0;
  onChange = (_: any) => { };
  onTouch = () => { };
  isDisabled: boolean = false;
  sucursales: Sucursales[] = [];

  constructor(private sucursalServicio: SucursalesService) { }


  ngOnInit(): void {

    this.listarSucursales();

  }

  listarSucursales() {

    this.sucursalServicio.sucursales$.subscribe(sucursales => {

      console.log("llegan",sucursales)

      this.sucursales = sucursales;

    })

  }

  editSelect(e: any) {
  
    this.onChange(e);
    this.onTouch();
  }

  writeValue(value: number): void {

    console.log(value)
   
    this.sucursal = value;
  
  
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
