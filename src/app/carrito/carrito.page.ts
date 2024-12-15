import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: any[] = [];

  constructor(private storage: Storage, private router: Router) {}
  async ngOnInit() {
    await this.loadCartData();
  }
  async loadCartData() {
    await this.storage.create();
    const cartData = await this.storage.get('cartData'); 
    if (cartData) {
      this.carrito = cartData;
    }
  }
  async proceedToCheckout() {
    if (this.carrito.length === 0) {
      alert('No hay productos en el carrito.');
      return;
    }
    const notifications = await this.storage.get('notifications') || [];
    notifications.push({
      fecha: new Date(),
      pedido: [...this.carrito], 
      status: 'En revisión',
    });
    await this.storage.set('notifications', notifications);
    this.carrito = [];
    await this.storage.set('cartData', this.carrito);
    this.router.navigate(['/pedido-realizado']);
  }
}
