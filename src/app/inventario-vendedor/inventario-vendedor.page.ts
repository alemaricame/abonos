import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-inventario-vendedor',
  templateUrl: './inventario-vendedor.page.html',
  styleUrls: ['./inventario-vendedor.page.scss'],
})
export class InventarioVendedorPage implements OnInit {
  vendedorInfo;
  inventarioVendedor: any = [];
  inventario: any = [];
  public inventarioBackup: any[];
  isItemAvailable = false;
  vendedorname;
  saldofaltante;
  saldoactual;
  creditosclientes;
  abonodia;

  totalinventario = 0;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public toastController: ToastController
  ) { 
    this.route.params.subscribe((vendedor) => {
      console.log('vendedor selected', vendedor.idUser);
      this.userService.getVendedor({id: vendedor.idUser})
      .subscribe((vendedor) => {
        this.vendedorInfo = vendedor[0];
        this.vendedorname = this.vendedorInfo.nombre;
        this.saldoactual = this.vendedorInfo.credito;
        this.userService.getProductos(this.vendedorInfo.idclientesmostrador).subscribe((inventario) => {
          this.inventario = inventario;

          let sum = 0;
          this.inventario.forEach(element => {          
            console.log(element.total);

            sum += parseFloat(element.total); 
          });
          console.log('sum', sum)
          this.totalinventario = sum;
          this.inventarioBackup = this.inventario;

        })
      })
    });
  }

  async ngOnInit() {
    this.inventario = await this.initializeItems();
  }
  
  async initializeItems(): Promise<any> {
    this.inventario = this.inventarioBackup;
    // this.userService.inventario().subscribe((inventario) => {
    //   console.log('inventario', inventario);
    //   this.inventario =  inventario;

    // })
  }
  

  async filterList(evt) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = evt.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.inventario = this.inventario.filter((item) => {
              return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }

  total(producto){
    producto.total = producto.precio_venta_vendedor * producto.cantidad;

    let sum = 0;
    this.inventario.forEach(element => {          
      console.log(element.total);

      sum += parseFloat(element.total); 
    });

    this.totalinventario = sum;

  }
  
guardarstock(producto){
  this.userService.update(producto).subscribe(async(data) => {
    if(data){
      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Se ha editado correctamente',
        duration: 2000
      });
      toast.present();
    }else{
      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Error al editar',
        duration: 2000
      });
      toast.present();
    }
  })
}

agregarProducto(){
  
}
  
}
