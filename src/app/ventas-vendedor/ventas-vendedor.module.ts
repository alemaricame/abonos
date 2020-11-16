import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasVendedorPageRoutingModule } from './ventas-vendedor-routing.module';

import { VentasVendedorPage } from './ventas-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasVendedorPageRoutingModule
  ],
  declarations: [VentasVendedorPage]
})
export class VentasVendedorPageModule {}
