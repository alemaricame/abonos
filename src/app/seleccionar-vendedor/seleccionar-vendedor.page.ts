import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-seleccionar-vendedor',
  templateUrl: './seleccionar-vendedor.page.html',
  styleUrls: ['./seleccionar-vendedor.page.scss'],
})
export class SeleccionarVendedorPage implements OnInit {
  vendedores:any=[];
  constructor(
    private userServices: UserService,
    private router: Router
  ) {
    this.userServices.getVendedores().subscribe((vendedores) => {
      this.vendedores = vendedores;
    })
   }

  ngOnInit() {
  }

  verInventario(vendedor){
    console.log('vendedor', vendedor);
    // this.router.navigate(['/inventario-vendedor'], { data: vendedor });
    this.router.navigate(['/inventario-vendedor'], vendedor);


    // this.router.navigate(['/inventario-vendedor', {vendedor:vendedor}]);
  }

}
