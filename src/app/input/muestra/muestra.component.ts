import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.scss']
})
export class MuestraComponent implements OnInit {

  @Input() mensajechild: string;

  constructor() { }

  ngOnInit(): void {
  }

}
