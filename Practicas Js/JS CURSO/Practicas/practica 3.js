function metodo1() {
  arregloA = new Array(1, 3, 4, 8, 6);
  arregloB = new Array(7, 9, 2, 1, 4);
  arregloC = new Array(5);

  for (var i = 0; i < arregloC.length; i++) {
    var numero = arregloA[i] + arregloB[i];
    numero = parseInt(numero);
    arregloC[i] = numero;
  }

  for (var i = 0; i < arregloA.length; i++) {
    document.write(
      "La suma de la posicion :   [" + i + "]  vale: " + arregloC[i] + "</br>"
    );
  }
}
