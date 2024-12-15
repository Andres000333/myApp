import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {
  platillos = [
    {
      nombre: 'Taco al Pastor',
      descripcion: 'Deliciosos tacos al pastor con piña.',
      precio: 50,
      imagen: 'assets/Taco al Pastor.jpeg',
      cantidad: 0
    },
    {
      nombre: 'Burrito de Carne',
      descripcion: 'Burrito relleno de carne asada, arroz y frijoles.',
      precio: 80,
      imagen: 'assets/Burrito de Carne.jpeg',
      cantidad: 0
    },
    {
      nombre: 'Quesadilla de Pollo',
      descripcion: 'Quesadilla rellena de pollo y queso derretido.',
      precio: 60,
      imagen: 'assets/descargar (1).jpeg',
      cantidad: 0
    }
  ];
  restaurantData = {
    nombre: 'Los Tacos',
  };
  constructor(private storage: Storage, private router: Router) {}
  ngOnInit() {

    this.loadRestaurantData();
  }
  async loadRestaurantData() {
    await this.storage.create();
    const data = await this.storage.get('restaurant1Data'); 
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
