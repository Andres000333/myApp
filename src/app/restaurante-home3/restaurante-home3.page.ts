import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-restaurante-home3',
  templateUrl: './restaurante-home3.page.html',
  styleUrls: ['./restaurante-home3.page.scss'],
})
export class RestauranteHome3Page implements OnInit {
  restaurantData = {
    nombre: 'Pasta',
    tipoComida: 'Comida Italiana',
    ubicacion: 'Calle de la Pasta 45, Ciudad de México',
    horario: 'Miércoles a Lunes: 1:00 PM - 10:00 PM',
    descripcion: 'Disfruta de la mejor pasta y vinos italianos.',
    imagen: 'assets/Comidaitaliana.jpeg', 
  };
  constructor(private storage: Storage) {}
  ngOnInit() {
    this.loadRestaurantData();
  }

  async loadRestaurantData() {
    await this.storage.create();
    await this.storage.set('restaurantData1', this.restaurantData); // Guardar los datos del restaurante
  }
}
