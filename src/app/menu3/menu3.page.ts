import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.page.html',
  styleUrls: ['./menu3.page.scss'],
})
export class Menu3Page implements OnInit {
  platillos = [
    {
      nombre: 'Bruschetta',
      descripcion: 'Pan tostado con tomate fresco, ajo, albahaca y aceite de oliva.',
      precio: 50,
      imagen: 'assets/Bruschetta.jpeg',
      cantidad: 0
    },
    {
      nombre: 'Caprese',
      descripcion: 'Ensalada de mozzarella fresca, tomate y albahaca, aderezada con aceite de oliva y vinagre balsámico.',
      precio: 80,
      imagen: 'assets/Caprese.jpeg',
      cantidad: 0
    },
    {
      nombre: 'Spaghetti alla Carbonara',
      descripcion: 'Pasta con una salsa cremosa de huevo, queso Pecorino Romano, panceta y pimienta negra.',
      precio: 60,
      imagen: 'assets/Spaghetti alla Carbonara.jpeg',
      cantidad: 0
    }
  ];
  restaurantData = {
    nombre: 'Pasta',
  };

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.loadRestaurantData();
  }
  async loadRestaurantData() {
    await this.storage.create();
    const data = await this.storage.get('restaurantData1'); 
    if (data) {
      this.restaurantData = data;
    }
  }
  async addToCart(platillo: any) {
    platillo.cantidad += 1;  
    const cart = await this.storage.get('cartData') || [];  
    let found = false;
    for (let item of cart) {
      if (item.nombre === platillo.nombre) {
        item.cantidad = platillo.cantidad;
        found = true;
        break;
      }
    }
    if (!found) {
      cart.push({ ...platillo });
    }

    await this.storage.set('cartData', cart);  
  }
  goToCart() {
    this.router.navigate(['/carrito']);
  }
}
