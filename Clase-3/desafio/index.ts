let nombre: string = "miguel"
let edad: number = 30

class Personaje {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const PERSONAJE: Personaje = new Personaje(nombre, edad);

