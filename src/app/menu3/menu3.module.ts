import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu3PageRoutingModule } from './menu3-routing.module';

import { Menu3Page } from './menu3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu3PageRoutingModule
  ],
  declarations: [Menu3Page]
})
export class Menu3PageModule {}
