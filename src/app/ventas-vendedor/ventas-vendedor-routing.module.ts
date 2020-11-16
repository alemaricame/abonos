import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasVendedorPage } from './ventas-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: VentasVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasVendedorPageRoutingModule {}
