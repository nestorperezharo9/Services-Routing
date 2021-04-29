import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  mensaje: string;
  constructor(public servicioComunica: ServiceService) { }

  ngOnInit(): void {
    this.servicioComunica.enviarMensajeO.subscribe(response => {
      this.mensaje = response;
    })
  }

  cambioTexto(mensaje: string) {
    this.servicioComunica.comunicarMensaje(mensaje);
  }

}
