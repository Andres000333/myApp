import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-restaurante2-home',
  templateUrl: './restaurante2-home.page.html',
  styleUrls: ['./restaurante2-home.page.scss'],
})
export class Restaurante2HomePage implements OnInit {

  restaurantData = {
    nombre: 'Sushi Master',
    tipoComida: 'Comida Japonesa',
    ubicacion: 'Av. de la Sushi 25, Ciudad de México',
    horario: 'Martes a Domingo: 12:00 PM - 9:00 PM',
    descripcion: 'Sushi y rolls frescos para todos los gustos.',
    imagen: 'assets/Rest.jpeg',
  };

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.saveRestaurantData();
  }

  async saveRestaurantData() {
    await this.storage.create();
    await this.storage.set('restaurant2Data', this.restaurantData);
  }
}
