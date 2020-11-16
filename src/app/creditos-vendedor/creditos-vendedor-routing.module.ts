import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditosVendedorPage } from './creditos-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: CreditosVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditosVendedorPageRoutingModule {}
