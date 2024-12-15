import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-restaurante1-home',
  templateUrl: './restaurante1-home.page.html',
  styleUrls: ['./restaurante1-home.page.scss'],
})
export class Restaurante1HomePage implements OnInit {
  restaurantData = {
    nombre: 'La Casa de Tacos',
    tipoComida: 'Comida Mexicana',
    ubicacion: 'Calle de los Tacos 15, Ciudad de México',
    horario: 'Lunes a Domingo: 11:00 AM - 10:00 PM',
    descripcion: 'Los mejores tacos al pastor de la ciudad.',
    imagen: 'assets/Rest tacos.jpeg', 
  };
  constructor(private storage: Storage) {}
  ngOnInit() {
    this.saveRestaurantData();
  }

  async saveRestaurantData() {
    await this.storage.create();
    await this.storage.set('restaurant1Data', this.restaurantData);
  }
}
