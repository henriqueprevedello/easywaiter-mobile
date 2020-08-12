import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-estado',
    loadChildren: () => import('./features/localizacao/lista-estado/lista-estado.module').then( m => m.ListaEstadoPageModule)
  },
  {
    path: 'lista-cidade',
    loadChildren: () => import('./features/localizacao/lista-cidade/lista-cidade.module').then( m => m.ListaCidadePageModule)
  },
  {
    path: 'lista-estabelecimento',
    loadChildren: () => import('./features/estabelecimento/lista-estabelecimento/lista-estabelecimento.module').then( m => m.ListaEstabelecimentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
