import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  clientes;
  productos;
  cargando = false;
  items;
  idUser: any = "";
  varResp : any = [];
  validate = true;

  sended = false;
  constructor(
    public services : UserService,
    private router: Router
  ) { 
    this.sended = this.services.sended;
    this.services.getUsers().subscribe( (resp) =>{
      this.clientes = resp;
    });  
  }

  ngOnInit() {
  }

  getVendedorSelected(item){
    this.cargando = true;
    this.validate = true;
    this.idUser = item;
    if(item){
      this.services.getProductos(item)
      .subscribe( resp =>{
        this.varResp.push(resp);
        if(this.varResp[0].length > 0){
          this.cargando = false;
          this.validate = false;
          this.items = resp;
        }
      });
    }
  }

  guardar(){
    this.sended = true;
    this.services.update(this.items).subscribe(resp=>{
      if(resp){
        this.sended = false;
        alert("Se ha cargado el inventario")
      }else{
        alert("Error al agregar");
      }
    });
  }

  doRefresh(event) {
    this.getVendedorSelected(this.idUser);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  inventariogral(){
    this.router.navigate(['/inventario-general'])

  }

  inventarioven(){
    this.router.navigate(['/seleccionar-vendedor'])

  }

  addProducto(){

  }

  historialventas(){

  }

  adminVendedor(){

  }
}
