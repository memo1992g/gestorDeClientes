import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {


  private clientes = new BehaviorSubject<Cliente[]>([]);
  clientes$ = this.clientes.asObservable();
  private apiUrl = environment.apiUrl;

  private cliente = new BehaviorSubject<Cliente>({
    idCliente: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    correo: '',
    telefono: '',
    estado: 0,
    direccion: '',
    fechaNacimiento: "",
    idSucursal: 0
  });
  cliente$ = this.cliente.asObservable();





  constructor(private http: HttpClient, private router: Router) { }

  listarClientes() {
    return this.http.get<Cliente[]>(this.apiUrl + 'cliente').subscribe(response => {
      this.clientes.next(response);
    })
  }

  detallesDelCliente(id: number) {
    return this.http.get<Cliente>(this.apiUrl + 'cliente/' + id).pipe(
      tap(response => this.cliente.next(response)))

  }

  modificarCliente(data: Cliente, idCliente: number) {
    const  dataModificada= {camposActualizados:data}
    return this.http.patch(this.apiUrl + 'cliente/' + idCliente, dataModificada);
  }

  guardarCliente(data: Cliente) {
    return this.http.post(this.apiUrl + 'cliente', data).pipe(
      tap(() => this.listarClientes()),

    ).subscribe((response: any) => {
      this.router.navigate(['/menu/clientes']);
    })
  }

  eliminarCliente(idCliente: number) {
    return this.http.delete(this.apiUrl + 'cliente/' + idCliente).pipe(
      tap(() => this.listarClientes()),

    ).subscribe((response: any) => {
      this.router.navigate(['/menu/clientes']);
    })
  }

  localStorageClienteDetalle(cliente: Cliente) {
    this.cliente.next(cliente)
  }
}
