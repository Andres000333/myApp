import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomerestaurantePageRoutingModule } from './homerestaurante-routing.module';

import { HomerestaurantePage } from './homerestaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomerestaurantePageRoutingModule
  ],
  declarations: [HomerestaurantePage]
})
export class HomerestaurantePageModule {}
