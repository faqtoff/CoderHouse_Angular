import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent  {
  constructor() {}
  
  personaModel: new FormControl({
    nombre: '',
    apellido: '',
  });

  guardar(){
    console.log(this.personaModel.value)
  }
 

}
