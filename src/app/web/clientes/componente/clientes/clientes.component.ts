import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableExporterDirective } from 'mat-table-exporter';
import { ClientesService } from 'src/app/core/services/clientes.service';
import { ExportarService } from 'src/app/core/services/exportar.service';
import { Cliente } from 'src/app/shared/models/cliente.interface';

/* const ELEMENT_DATA: Cliente[] = [
  {
    idCliente: 1,
    primerNombre: 'Hydrogen',
    segundoNombre: '1.0079',
    primerApellido: 'H',
    segundoApellido: 'H',
    correo: 'h@gmail.com',
    telefono: '36123131',
    direccion: 'HH',
    fechaNacimiento: '10/11/1990',
    estado: 1,
  },
  {
    idCliente: 2,
    primerNombre: 'Hydrogen',
    segundoNombre: '1.0079',
    primerApellido: 'H',
    segundoApellido: 'H',
    correo: 'h@gmail.com',
    telefono: '36123131',
    direccion: 'HH',
    fechaNacimiento: '10/11/1990',
    estado: 1,
  },
]; */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit ,AfterViewInit {
  form!: FormGroup;
  columns = [
    /* {
      columnDef: 'idCliente',
      header: 'ID',
      cell: (element: Cliente) => `${element.idCliente}`,
    }, */
    {
      columnDef: 'primerNombre',
      header: 'Primer Nombre',
      cell: (element: Cliente) => `${element.primerNombre}`,
    },
    {
      columnDef: 'segundoNombre',
      header: 'Segundo Nombre',
      cell: (element: Cliente) => `${element.segundoNombre}`,
    },
    {
      columnDef: 'primerApellido',
      header: 'Primer Apellido',
      cell: (element: Cliente) => `${element.primerApellido}`,
    },
    {
      columnDef: 'segundoApellido',
      header: 'Segundo Apellido',
      cell: (element: Cliente) => `${element.segundoApellido}`,
    },
    {
      columnDef: 'correo',
      header: 'Correo',
      cell: (element: Cliente) => `${element.correo}`,
    },
    {
      columnDef: 'telefono',
      header: 'Telefono',
      cell: (element: Cliente) => `${element.telefono}`,
    },
    {
      columnDef: 'direccion',
      header: 'Direccion',
      cell: (element: Cliente) => `${element.direccion}`,
    },
    {
      columnDef: 'fechaNacimiento',
      header: 'Fecha de Nacimiento',
      cell: (element: Cliente) => `${element.fechaNacimiento}`,
    },

    /* {
      columnDef: 'estado',
      header: 'Estatus',
      cell: (element: Cliente) => `${element.estado}`,
    }, */
  ];
  dataSource: Cliente[] = [];
  displayedColumns = this.columns.map((c) => c.columnDef);
  clickedRows = new Set<Cliente>();
  idCliente: number = 0;
  @ViewChild('exporter', { static: false }) tableExporter: MatTableExporterDirective | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private servicioCliente: ClientesService,
    private exportService: ExportarService
  ) {
    this.formGeneral();
  }
  ngOnInit(): void {
    this.listarClientes();
    this.filtrarPorLocalidad();
  }
  ngAfterViewInit() {
    if(this.tableExporter !== undefined){
      this.exportService.setTableExporter(this.tableExporter);
    }
    
  }


  exportData() {
    this.exportService.exportTable('xlsx', {});
  }

  private listarClientes() {
    this.servicioCliente.clientes$.subscribe(response => {
      console.log("response", response)
      this.dataSource = response;
    })
  }



  private formGeneral() {
    this.form = this.formBuilder.group({
      idLocalidad: [''],
    });
  }

  get idLocalidadField() {

    return this.form.get('idLocalidad');

  }

  filtrarPorLocalidad() {

    this.idLocalidadField!.valueChanges.subscribe(idLocalidad => {
      this.servicioCliente.clientes$.subscribe(clientesFiltrados=>{
        this.dataSource = clientesFiltrados.filter(clientes=>clientes.idSucursal === idLocalidad)
      })
    })

  }
}
