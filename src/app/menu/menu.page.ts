import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  platillos: any[] = []; 
  restaurantData: any;   

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadPlatillos();
    this.loadRestaurantData();
  }

  async loadPlatillos() {
    const platillos = await this.storage.get('platillos');
    if (platillos) {
      this.platillos = platillos;
    }
  }

  async loadRestaurantData() {
    this.restaurantData = await this.storage.get('restaurantData');
  }
}
