import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteHome3PageRoutingModule } from './restaurante-home3-routing.module';

import { RestauranteHome3Page } from './restaurante-home3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteHome3PageRoutingModule
  ],
  declarations: [RestauranteHome3Page]
})
export class RestauranteHome3PageModule {}
