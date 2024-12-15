import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-homerestaurante',
  templateUrl: './homerestaurante.page.html',
  styleUrls: ['./homerestaurante.page.scss'],
})
export class HomerestaurantePage implements OnInit {
  restaurantData: any;
  constructor(private storage: Storage) {}
  async ngOnInit() {
    this.restaurantData = await this.storage.get('restaurantData');
    console.log('Datos del restaurante:', this.restaurantData); 
  }
}
