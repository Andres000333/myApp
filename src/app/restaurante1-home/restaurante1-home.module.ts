import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurante1HomePageRoutingModule } from './restaurante1-home-routing.module';

import { Restaurante1HomePage } from './restaurante1-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurante1HomePageRoutingModule
  ],
  declarations: [Restaurante1HomePage]
})
export class Restaurante1HomePageModule {}
