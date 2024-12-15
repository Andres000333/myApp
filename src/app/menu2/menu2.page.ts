import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {
  platillos = [
    {
      nombre: 'California Roll',
      descripcion: 'Alga nori, arroz, aguacate, surimi (imitación de cangrejo) y pepino. A menudo recubierto con semillas de sésamo o tobiko (huevas de pescado).',
      precio: 50,
      imagen: 'assets/roll.jpeg',
      cantidad: 0
    },
    {
      nombre: 'Philadelphia Roll',
      descripcion: 'Roll relleno de queso crema, salmón, aguacate y, a veces, pepino.',
      precio: 80,
      imagen: 'assets/Philadelphia Roll.jpeg',
      cantidad: 0
    },
    {
      nombre: 'Spicy Tuna Roll',
      descripcion: 'Atún picante mezclado con mayonesa y chile, enrollado con arroz y alga nori.',
      precio: 60,
      imagen: 'assets/Spicy Tuna Roll.jpeg',
      cantidad: 0
    }
  ];
  restaurantData = {
    nombre: 'Sushi Master',
  };

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.loadRestaurantData();
  }
  async loadRestaurantData() {
    await this.storage.create();
    const data = await this.storage.get('restaurant2Data'); 
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
