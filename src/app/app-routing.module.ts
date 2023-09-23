
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren:()=>import('../app/web/home/home.module').then((m) => m.HomeModule),  
  },
  {
    path: 'detalles/:id',
    loadChildren:()=>import('../app/web/detalles/detalles.module').then((m) => m.DetallesModule),  
  },
  {
    path: 'editar/:id',
    loadChildren:()=>import('../app/web/registro/registro.module').then((m) => m.RegistroModule),  
  },
    {
    path: '**',
    loadChildren: () =>
      import('../app/web/not-found/not-found.module').then((h) => h.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
