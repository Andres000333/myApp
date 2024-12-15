import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-editar-restaurante',
  templateUrl: './editar-restaurante.page.html',
  styleUrls: ['./editar-restaurante.page.scss'],
})
export class EditarRestaurantePage implements OnInit {
  nombre = '';
  tipoComida = '';
  ubicacion = '';
  horario = '';
  descripcion = '';
  imagen: string | ArrayBuffer = ''
  storageReady: boolean = false;
  constructor(private router: Router, private storage: Storage) {}
  async ngOnInit() {
    await this.storage.create();  
    this.storageReady = true;  
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagen = e.target.result; 
        console.log('Imagen cargada:', this.imagen);  
      };
      reader.readAsDataURL(file); 
    }
  }
  async saveChanges() {
    if (!this.storageReady) return;  
    const restaurantData = {
      nombre: this.nombre,
      tipoComida: this.tipoComida,
      ubicacion: this.ubicacion,
      horario: this.horario,
      descripcion: this.descripcion,
      imagen: this.imagen,  
    };
    try {
      await this.storage.set('restaurantData', restaurantData);  
      this.router.navigate(['/homerestaurante']);  
    } catch (error) {
      console.error('Error al guardar los datos:', error); 
    }
  }
}
