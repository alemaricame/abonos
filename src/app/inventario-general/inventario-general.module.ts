import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioGeneralPageRoutingModule } from './inventario-general-routing.module';

import { InventarioGeneralPage } from './inventario-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioGeneralPageRoutingModule
  ],
  declarations: [InventarioGeneralPage]
})
export class InventarioGeneralPageModule {}
