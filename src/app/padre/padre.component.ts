import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  constructor(public comunicacion: ServiceService) {  }

  public emitirValor() {
    var date = new Date();
    this.comunicacion.enviar(date.getDate(), date.getMonth()+1, date.getFullYear());
  }

  ngOnInit(): void {
  }
}
