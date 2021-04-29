import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  mensaje: string;
  constructor(private servicioComunica: ServiceService) { }

  ngOnInit(): void {
    this.servicioComunica.enviarMensajeO.subscribe(response => {
      this.mensaje = response;
    })
  }

  cambioTexto(mensaje: string) {
    this.servicioComunica.comunicarMensaje(mensaje);
  }

}