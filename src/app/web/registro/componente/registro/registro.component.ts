import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientesService } from 'src/app/core/services/clientes.service';
import { Util } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  idCliente: number = 0;
  datosDelCliente!: FormGroup;
  duration: string = '400';
  titulo: string = ''

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clienteServicios: ClientesService,

  ) {
    this.formularioDelCliente();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idCliente = params['id'];

      if (this.idCliente !== undefined) {
        this.titulo = 'EDITAR CLIENTE';
        this.clienteServicios.detallesDelCliente(this.idCliente).subscribe(response => {

          response.fechaNacimiento = Util.cambiarFormatoDeFecha(response.fechaNacimiento);

          this.datosDelCliente.patchValue(response)//llamar al servicio que tiene la informacion.
        })
      } else {
        this.titulo = 'REGITRAR CLIENTE'
      }
    });
  }

  private formularioDelCliente() {
    this.datosDelCliente = this._formBuilder.group({
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],

      /* edad: ['', [Validators.required, Validators.pattern('/^d+$/')]], */
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      idSucursal: ['', [Validators.required]],
    });
  }


  get direccionField() {
    return this.datosDelCliente.get('direccion');
  }
  get telefonoField() {
    return this.datosDelCliente.get('telefono');
  }
  get fechaDeNacimientoField() {
    return this.datosDelCliente.get('fechaNacimiento');
  }
  get correo() {
    return this.datosDelCliente.get('correo');
  }
  get sucursalField() {
    return this.datosDelCliente.get('idSucursal');
  }

  guardarCliente() {
    console.log("Que llega", this.idCliente)
    if (this.idCliente === undefined) {
      this.clienteServicios
        .guardarCliente(this.datosDelCliente.value);

    } else {
      this.clienteServicios
        .modificarCliente(this.datosDelCliente.value, this.idCliente)
        .subscribe((response) => {

          this.router.navigate(['/menu/clientes']);
        });
    }
  }




}

