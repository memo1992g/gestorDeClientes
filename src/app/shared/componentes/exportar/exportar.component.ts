import { Component, Input } from '@angular/core';
import { ExportarService } from 'src/app/core/services/exportar.service';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css']
})
export class ExportarComponent {

  constructor(private exportService: ExportarService) {}

  exportData() {
    this.exportService.exportTable('xlsx', {});
  }

}
