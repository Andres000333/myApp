import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  email = '';

  constructor() {}

  sendRecoveryEmail() {
    if (!this.email) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    alert(`Se han enviado instrucciones de recuperación al correo: ${this.email}`);
  }
}
