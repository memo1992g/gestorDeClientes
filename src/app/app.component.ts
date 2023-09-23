import { Component, OnInit } from '@angular/core';
import { ClientesService } from './core/services/clientes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SucursalesService } from './core/services/sucursales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private clienteServicios:ClientesService, private route:ActivatedRoute,private sucursalService:SucursalesService){

  }
  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      if (params['id'] !== undefined) {
    this.clienteServicios.detallesDelCliente(params['id']);
      }
  })

    this.sucursalService.listarSucursales();
    this.clienteServicios.listarClientes();
    
  }
  
  title = 'gestorDeClientes';
}
