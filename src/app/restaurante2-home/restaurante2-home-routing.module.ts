import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurante2HomePage } from './restaurante2-home.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurante2HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurante2HomePageRoutingModule {}
