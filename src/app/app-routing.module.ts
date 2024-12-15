import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'homecliente',
    loadChildren: () => import('./homecliente/homecliente.module').then( m => m.HomeclientePageModule)
  },
  {
    path: 'homerestaurante',
    loadChildren: () => import('./homerestaurante/homerestaurante.module').then( m => m.HomerestaurantePageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'validacion',
    loadChildren: () => import('./validacion/validacion.module').then( m => m.ValidacionPageModule)
  },
  {
    path: 'registro-exito',
    loadChildren: () => import('./registro-exito/registro-exito.module').then( m => m.RegistroExitoPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'editar-restaurante',
    loadChildren: () => import('./editar-restaurante/editar-restaurante.module').then( m => m.EditarRestaurantePageModule)
  },
  {
    path: 'editar-menu',
    loadChildren: () => import('./editar-menu/editar-menu.module').then( m => m.EditarMenuPageModule)
  },
  {
    path: 'notificacionescliente',
    loadChildren: () => import('./notificacionescliente/notificacionescliente.module').then( m => m.NotificacionesclientePageModule)
  },
  {
    path: 'menu1',
    loadChildren: () => import('./menu1/menu1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'menu3',
    loadChildren: () => import('./menu3/menu3.module').then( m => m.Menu3PageModule)
  },
  {
    path: 'restaurante1-home',
    loadChildren: () => import('./restaurante1-home/restaurante1-home.module').then( m => m.Restaurante1HomePageModule)
  },
  {
    path: 'restaurante2-home',
    loadChildren: () => import('./restaurante2-home/restaurante2-home.module').then( m => m.Restaurante2HomePageModule)
  },
  {
    path: 'restaurante-home3',
    loadChildren: () => import('./restaurante-home3/restaurante-home3.module').then( m => m.RestauranteHome3PageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'pedido-realizado',
    loadChildren: () => import('./pedido-realizado/pedido-realizado.module').then( m => m.PedidoRealizadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
