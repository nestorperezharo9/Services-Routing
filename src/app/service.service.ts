import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  mensaje: string;
  private enviarMensajeS = new Subject<string>();
  enviarMensajeO = this.enviarMensajeS.asObservable();

  comunicarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeS.next(mensaje);
  }
}
