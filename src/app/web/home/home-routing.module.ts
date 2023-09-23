import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  children:[
    {
      path:'registro',
      loadChildren: () => import('../registro/registro.module').then(m => m.RegistroModule)
    },
    /* {
      path:'filtrar',
      loadChildren: () => import('../filtro/filtro.module').then(m => m.FiltroModule)
    }, */
    {
      path:'clientes',
      loadChildren: () => import('../clientes/clientes.module').then(m=>m.ClientesModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
