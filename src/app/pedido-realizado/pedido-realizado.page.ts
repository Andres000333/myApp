import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-realizado',
  templateUrl: './pedido-realizado.page.html',
  styleUrls: ['./pedido-realizado.page.scss'],
})
export class PedidoRealizadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función para regresar a la página de homecliente
  goToHomeCliente() {
    this.router.navigate(['/homecliente']);
  }
}
