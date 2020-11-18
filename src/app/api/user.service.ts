import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public vendedores : [] = [];
  public sended = false;
  constructor(
    private http: HttpClient,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
  ) { }


  getUsers() {
    //return this.http.post<RespVenta>(environment.apiURL+'/ventas/insertVenta',{id:id,venta:data})
    let url= environment.apiURL+'consultas/getUsers';
    return this.http.get(url);
        
  }

  getProductos(idUser) {
    //return this.http.post<RespVenta>(environment.apiURL+'/ventas/insertVenta',{id:id,venta:data})
    let url=  environment.apiURL+'consultas/productos';
    return this.http.post(url,{idUser:idUser});  
  }
  //updateProducto

  update(data){
    this.sended = true;
    return this.http.post(environment.apiURL+'/consultas/updateProducto',data);
  }


  inventario(){
    this.sended = true;
    return this.http.get(environment.apiURL+'/consultas/inventario');
  }

  editarstock(data){
    this.sended = true;
    //editarstockproducto
    return this.http.post(environment.apiURL+'/consultas/editarstockproducto',data);

  }

  getVendedores(){
    return this.http.get(environment.apiURL+'/consultas/vendedores');
  }

  getVendedor(data){
    return this.http.post(environment.apiURL+'/consultas/vendedor',data);
  }

  getVentas(data:string[]){
    return this.http.post(environment.apiURL+'/ventas/getVenta',{ventas:data});         
  }
}
