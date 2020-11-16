import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorVendedorPageRoutingModule } from './administrador-vendedor-routing.module';

import { AdministradorVendedorPage } from './administrador-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorVendedorPageRoutingModule
  ],
  declarations: [AdministradorVendedorPage]
})
export class AdministradorVendedorPageModule {}
