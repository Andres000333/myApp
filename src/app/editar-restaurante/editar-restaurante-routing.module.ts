import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarRestaurantePage } from './editar-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: EditarRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarRestaurantePageRoutingModule {}
