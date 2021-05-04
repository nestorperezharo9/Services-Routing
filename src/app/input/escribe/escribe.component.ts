import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escribe',
  templateUrl: './escribe.component.html',
  styleUrls: ['./escribe.component.scss']
})
export class EscribeComponent implements OnInit {
  mensajepadre: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  keyUp(mensaje: string) {
    this.mensajepadre = mensaje;
  }
}
