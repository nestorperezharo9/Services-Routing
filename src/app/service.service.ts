import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private day = new ReplaySubject<number>(1);
  private month = new ReplaySubject<number>(1);
  private year = new ReplaySubject<number>(1);
  
  public get recibirday() {
    return this.day.asObservable()
  }
  public get recibirmes() {
    return this.month.asObservable()
  }
  public get recibiraño() {
    return this.year.asObservable()
  }

  public enviar(id: number, id1:number, id2:number): void {
    this.day.next(id);
    this.month.next(id1);
    this.year.next(id2);

  }
  /*
  mensaje: string;
  private enviarMensajeS = new Subject<string>();
  enviarMensajeO = this.enviarMensajeS.asObservable();

  comunicarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeS.next(mensaje);
  }*/
}
