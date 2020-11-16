import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorVendedorPage } from './administrador-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorVendedorPageRoutingModule {}
