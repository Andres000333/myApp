import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.page.html',
  styleUrls: ['./homecliente.page.scss'],
})
export class HomeclientePage implements OnInit {
  searchTerm: string = '';  
  restaurants = [
    {
      nombre: 'La Casa de los Tacos',
      tipoComida: 'Comida Mexicana',
      ubicacion: 'Calle de los Tacos 15, Ciudad de México',
      horario: 'Lunes a Domingo: 11:00 AM - 10:00 PM',
      imagen: 'assets/Rest tacos.jpeg',
      ruta: '/restaurante1-home'
    },
    {
      nombre: 'Sushi',
      tipoComida: 'Comida Japonesa',
      ubicacion: 'Av. de la Sushi 25, Ciudad de México',
      horario: 'Martes a Domingo: 12:00 PM - 9:00 PM',
      imagen: 'assets/sushi.jpeg',  
      ruta: '/restaurante2-home'
    },
    {
      nombre: 'Pasta',
      tipoComida: 'Comida Italiana',
      ubicacion: 'Calle de la Pasta 45, Ciudad de México',
      horario: 'Miércoles a Lunes: 1:00 PM - 10:00 PM',
      imagen: 'assets/Comidaitaliana.jpeg', 
      ruta: '/restaurante-home3'
    },
  ];
  constructor(public router: Router, private storage: Storage) {}
  ngOnInit() {
    this.storage.create();
  }
  filterRestaurants() {
    if (this.searchTerm === '') {
      return this.restaurants;
    }
    return this.restaurants.filter(restaurant =>
      restaurant.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  goToRestaurantPage(restaurantRoute: string) {
    this.router.navigate([restaurantRoute]);  
  }
}
