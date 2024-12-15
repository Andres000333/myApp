import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurante1HomePage } from './restaurante1-home.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurante1HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurante1HomePageRoutingModule {}
