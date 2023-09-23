import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sucursales } from 'src/app/shared/models/sucursales.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class SucursalesService {
  private apiUrl= environment.apiUrl;
  private sucursales = new BehaviorSubject<Sucursales[]>([]);
  sucursales$ = this.sucursales.asObservable();

  constructor(private http: HttpClient) {}

  listarSucursales() {
    return this.http
      .get<Sucursales[]>(this.apiUrl + 'sucursal')
      .subscribe((response) => {
        console.log('Respuesta sucursales', response);
        this.sucursales.next(response);
      });
  }
}
