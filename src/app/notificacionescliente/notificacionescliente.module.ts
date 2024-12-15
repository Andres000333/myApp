import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesclientePageRoutingModule } from './notificacionescliente-routing.module';

import { NotificacionesclientePage } from './notificacionescliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesclientePageRoutingModule
  ],
  declarations: [NotificacionesclientePage]
})
export class NotificacionesclientePageModule {}
