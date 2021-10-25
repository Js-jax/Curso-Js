function operacion() {
  var nombre = prompt("Ingresa tu nombre :", "nombre");
  var curso = prompt("Ingresa tu curso :", "curso");
  var edad = prompt("Ingresa tu edad :", "edad");

  if (edad >= 18) {
    alert(nombre + ", Bienvenido al curso" + curso + "\n");
  } else {
    alert("No puedes registrarte aun ");
  }
}
