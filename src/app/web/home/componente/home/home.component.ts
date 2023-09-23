import { Component } from '@angular/core';
import { ChipColor } from 'src/app/shared/models/chipColor.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  availableColors: ChipColor[] = [
    {name: 'Clientes', color: 'primary', route: '/menu/clientes'},
    {name: 'Registro', color: 'primary',route: '/menu/registro'},
    /* {name: 'Filtrar', color: 'primary',route:'/menu/filtrar'}, */
    
  ];

 

}
