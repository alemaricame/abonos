import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inventario-general',
    loadChildren: () => import('./inventario-general/inventario-general.module').then( m => m.InventarioGeneralPageModule)
  },
  {
    path: 'seleccionar-vendedor',
    loadChildren: () => import('./seleccionar-vendedor/seleccionar-vendedor.module').then( m => m.SeleccionarVendedorPageModule)
  },
  {
    path: 'inventario-vendedor',
    loadChildren: () => import('./inventario-vendedor/inventario-vendedor.module').then( m => m.InventarioVendedorPageModule)
  },
  {
    path: 'ventas-vendedor',
    loadChildren: () => import('./ventas-vendedor/ventas-vendedor.module').then( m => m.VentasVendedorPageModule)
  },
  {
    path: 'creditos-vendedor',
    loadChildren: () => import('./creditos-vendedor/creditos-vendedor.module').then( m => m.CreditosVendedorPageModule)
  },
  {
    path: 'administrador-vendedor',
    loadChildren: () => import('./administrador-vendedor/administrador-vendedor.module').then( m => m.AdministradorVendedorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
