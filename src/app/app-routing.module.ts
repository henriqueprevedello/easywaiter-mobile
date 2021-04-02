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
  {
    path: 'estabelecimento',
    loadChildren: () => import('./features/estabelecimento/estabelecimento/estabelecimento.module').then( m => m.EstabelecimentoPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./features/carrinho/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'item-pedido-modal',
    loadChildren: () => import('./features/estabelecimento/item-pedido-modal/item-pedido-modal.module').then( m => m.ItemPedidoModalPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./features/estabelecimento/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'sem-conexao',
    loadChildren: () => import('./features/sem-conexao/sem-conexao.module').then( m => m.SemConexaoPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./features/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'comanda',
    loadChildren: () => import('./features/comanda/comanda.module').then( m => m.ComandaPageModule)
  },
  {
    path: 'aguarde-pagamento',
    loadChildren: () => import('./features/aguarde-pagamento/aguarde-pagamento.module').then( m => m.AguardePagamentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
