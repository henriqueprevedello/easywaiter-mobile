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
  {
    path: 'perfil',
    loadChildren: () => import('./features/usuario/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./features/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./features/usuario/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'identificacao-mesa',
    loadChildren: () => import('./features/estabelecimento/identificacao-mesa/identificacao-mesa.module').then( m => m.IdentificacaoMesaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
