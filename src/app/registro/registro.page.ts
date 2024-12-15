import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  };
  constructor(private router: Router, private storage: Storage) {
    this.initStorage();
  }
  async initStorage() {
    await this.storage.create();
  }
  async registerUser() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!this.user.username || !this.user.email || !this.user.role) {
      alert('Por favor, completa todos los campos');
      return;
    }
    await this.storage.set('user', this.user);
    if (this.user.role === 'restaurante') {
      this.router.navigate(['/validacion']);
    }
    if (this.user.role === 'cliente') {
      this.router.navigate(['/homecliente']);
    }
  }
}
