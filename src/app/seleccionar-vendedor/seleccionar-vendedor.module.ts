import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarVendedorPageRoutingModule } from './seleccionar-vendedor-routing.module';

import { SeleccionarVendedorPage } from './seleccionar-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarVendedorPageRoutingModule
  ],
  declarations: [SeleccionarVendedorPage]
})
export class SeleccionarVendedorPageModule {}
