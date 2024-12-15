import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMenuPageRoutingModule } from './editar-menu-routing.module';

import { EditarMenuPage } from './editar-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMenuPageRoutingModule
  ],
  declarations: [EditarMenuPage]
})
export class EditarMenuPageModule {}
