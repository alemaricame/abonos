import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarVendedorPage } from './seleccionar-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarVendedorPageRoutingModule {}
