import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomerestaurantePage } from './homerestaurante.page';

const routes: Routes = [
  {
    path: '',
    component: HomerestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomerestaurantePageRoutingModule {}
