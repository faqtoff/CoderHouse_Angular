var nombre = "miguel";
var edad = 30;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Personaje;
}());
var PERSONAJE = new Personaje(nombre, edad);
