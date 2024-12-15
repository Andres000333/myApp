import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarRestaurantePageRoutingModule } from './editar-restaurante-routing.module';

import { EditarRestaurantePage } from './editar-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarRestaurantePageRoutingModule
  ],
  declarations: [EditarRestaurantePage]
})
export class EditarRestaurantePageModule {}
