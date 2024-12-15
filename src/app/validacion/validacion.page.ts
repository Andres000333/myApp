import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage {
  direccion = '';

  constructor(private router: Router) {}

  submitValidation() {
    if (!this.direccion) {
      alert('Por favor, ingresa una dirección válida.');
      return;
    }
    this.router.navigate(['/registro-exito']);
  }
}
