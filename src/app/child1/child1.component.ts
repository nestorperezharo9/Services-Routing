import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  public day = this.comunicacion.recibirday;
  public month = this.comunicacion.recibirmes;
  public year = this.comunicacion.recibiraño;

  constructor(public comunicacion: ServiceService) {  }

  ngOnInit(): void {
  }

}
