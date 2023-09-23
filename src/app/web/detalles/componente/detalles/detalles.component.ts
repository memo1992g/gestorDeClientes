import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from 'src/app/core/services/clientes.service';
import { Cliente } from 'src/app/shared/models/cliente.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  idCliente: number = 0;
  detalleCliente: Cliente = {
    
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: '',
    estado: 1,
    idSucursal:0
  };

  constructor(
    private route: ActivatedRoute,
    private clienteServicio: ClientesService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idCliente = params['id'];
      console.log(this.idCliente);
    });
    
    this.detallesDelCliente();
  }

  detallesDelCliente() {
    this.clienteServicio
      .detallesDelCliente(this.idCliente)
      .subscribe((response: Cliente) => {
        this.clienteServicio.localStorageClienteDetalle(response)
        this.detalleCliente = response;
      });
  }



  eliminarCliente(idCliente:any) {
    this.clienteServicio.eliminarCliente(idCliente);

  }
}
