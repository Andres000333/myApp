import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-menu',
  templateUrl: './editar-menu.page.html',
  styleUrls: ['./editar-menu.page.scss'],
})

export class EditarMenuPage implements OnInit {
  dish = {
    nombre: '',
    descripcion: '',
    precio: null,
    imagen: ''
  };
  platillos: any[] = [];
  constructor(private storage: Storage, private router: Router) {}
  async ngOnInit() {
    await this.storage.create();
    this.loadPlatillos();
  }
  async addDish() {
    if (this.dish.nombre && this.dish.descripcion && this.dish.precio && this.dish.imagen) {
      this.platillos.push({ ...this.dish });
      await this.storage.set('platillos', this.platillos); 
      this.dish = { nombre: '', descripcion: '', precio: null, imagen: '' }; 
    } else {
      console.log('Por favor complete todos los campos');
    }
  }
  async loadPlatillos() {
    const platillos = await this.storage.get('platillos');
    if (platillos) {
      this.platillos = platillos;
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.dish.imagen = e.target.result; 
      };
      reader.readAsDataURL(file); 
    }
  }
}
