import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteHome3Page } from './restaurante-home3.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteHome3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteHome3PageRoutingModule {}
