import { Injectable } from '@angular/core';
import { MatTableExporterDirective } from 'mat-table-exporter';

@Injectable({
  providedIn: 'root'
})
export class ExportarService {

  private tableExporter: MatTableExporterDirective | null = null;

  setTableExporter(exporter: MatTableExporterDirective) {
    this.tableExporter = exporter;
  }

  exportTable(format: string, options: any) {
    try {
      if (this.tableExporter !== undefined && this.tableExporter !== null) {
        this.tableExporter!.exportTable('csv',{});
      }
      
    } catch (error) {
      
    }
    
  }
}
