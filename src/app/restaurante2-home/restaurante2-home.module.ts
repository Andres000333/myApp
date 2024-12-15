import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurante2HomePageRoutingModule } from './restaurante2-home-routing.module';

import { Restaurante2HomePage } from './restaurante2-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurante2HomePageRoutingModule
  ],
  declarations: [Restaurante2HomePage]
})
export class Restaurante2HomePageModule {}
