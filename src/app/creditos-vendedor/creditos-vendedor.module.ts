import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditosVendedorPageRoutingModule } from './creditos-vendedor-routing.module';

import { CreditosVendedorPage } from './creditos-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditosVendedorPageRoutingModule
  ],
  declarations: [CreditosVendedorPage]
})
export class CreditosVendedorPageModule {}
