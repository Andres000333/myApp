import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-notificacionescliente',
  templateUrl: './notificacionescliente.page.html',
  styleUrls: ['./notificacionescliente.page.scss'],
})
export class NotificacionesclientePage implements OnInit {
  notificaciones: any[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.loadNotifications();
  }

  async loadNotifications() {
    await this.storage.create();
    const notifications = await this.storage.get('notifications');
    if (notifications) {
      this.notificaciones = notifications;
    }
  }

  async deleteNotification(index: number) {
    this.notificaciones.splice(index, 1);
    await this.storage.set('notifications', this.notificaciones);
    alert('Pedido eliminado correctamente.');
  }
}
