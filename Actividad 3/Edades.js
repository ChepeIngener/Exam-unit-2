function getOldest(nombre1, edad1, nombre2, edad2, nombre3, edad3) {
    if (edad1 > edad2 && edad1 > edad3) {
        document.getElementById("nombreMasAnciano").innerHTML = nombre1;
        document.getElementById("edadMasAnciano").innerHTML = edad1;
    } else if (edad2 > edad1 && edad2 > edad3) {
        document.getElementById("nombreMasAnciano").innerHTML = nombre2;
        document.getElementById("edadMasAnciano").innerHTML = edad2;
    } else {
        document.getElementById("nombreMasAnciano").innerHTML = nombre3;
        document.getElementById("edadMasAnciano").innerHTML = edad3;
    }
}
// Pedir los 3 nombres
var nombre1 = prompt("Introduce el primer nombre: ");
var nombre2 = prompt("Introduce el segundo nombre: ");
var nombre3 = prompt("Introduce el tercer nombre: ");

// Pedir las 3 edades
var edad1 = parseInt(prompt("Introduce la edad del primer nombre: "));
var edad2 = parseInt(prompt("Introduce la edad del segundo nombre: "));
var edad3 = parseInt(prompt("Introduce la edad del tercer nombre: "));

// Llamar a la función para obtener el nombre del más anciano
getOldest(nombre1, edad1, nombre2, edad2, nombre3, edad3);