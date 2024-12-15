import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username = '';
  password = '';

  constructor(private router: Router, private storage: Storage) {}

  async loginUser() {
    const storedUser = await this.storage.get('user');
    if (
      storedUser &&
      storedUser.username === this.username &&
      storedUser.password === this.password
    ) {
      if (storedUser.role === 'cliente') {
        this.router.navigate(['/homecliente']);
      } else if (storedUser.role === 'restaurante') {
        this.router.navigate(['/homerestaurante']);
      }
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }
}
