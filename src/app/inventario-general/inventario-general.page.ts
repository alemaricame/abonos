import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-inventario-general',
  templateUrl: './inventario-general.page.html',
  styleUrls: ['./inventario-general.page.scss'],
})
export class InventarioGeneralPage implements OnInit {

  inventario:any = [];
  public inventarioBackup: any[];
  isItemAvailable = false;


  constructor(
    private userService : UserService,
    public toastController: ToastController
  ) {
    this.userService.inventario().subscribe((inventario) => {
      console.log('inventario', inventario);
      this.inventario = inventario;
      this.inventarioBackup = this.inventario;
    })
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

  guardarstock(producto){
    console.log('producto', producto);
    this.userService.editarstock(producto).subscribe(async resp=>{
      if(resp){
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
    });
  }

  verproducto(producto){
    console.log('producto ver', producto)
  }

  
}
