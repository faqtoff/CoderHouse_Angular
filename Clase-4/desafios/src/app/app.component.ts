import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'desafio1';
  familiares = [ {nombre: 'Juan', edad: '20'}, {nombre: 'Pedro', edad: '30'}, {nombre: 'Maria', edad: '40'} ];

  contenido1: string = 'Contenido parrafo 1'
  contenido2: string = 'Contenido parrafo 2'
}
