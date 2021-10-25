function datos() {
  var nombre = document.getElementById("nombre").value;
  var cantidad1 = document.getElementById("cantidad").value;
  var boletos = document.getElementById("boletos").value;

  document.write("Nombre: " + nombre + "<br/>");
  document.write("Cantidad de Boletos : " + cantidad1 + "<br/>");
  document.write("Tipo de Boleto  Elegido : " + boletos + "</br>");
  document.write("Refrigerios: " + postre + "<br/>");

  /*var boletos = document.getElementById("boletos");
        document.write(boletos.options[boletos.selectedIndex].text + '<br>');
        */

  if (document.getElementById("Palomitas").checked) {
    postre += "Palomitas,";
  }
  if (document.getElementById("Refresco").checked) {
    postre += "Refresco,";
  }
  if (document.getElementById("Chocolates").checked) {
    postre += "Chocolates,";
  }
}

//var tarjeta = 10;
//var efectivo = 5;

//if(document.getElementById("Efectivo").checked){
//= "";
//}else{
// = "";
//}

<form action="#">
  Ingresa tu nombre:
  <input type="text" name="" id="nombre" />
  <br />
  Ingresa la cantidad de boletos:
  <input type="number" id="cantidad" min="1" max="20" value="1" />
  <br />
  Selecciona tus boletos:
  <select name="" id="boletos">
    <option value="Sencillo">Sencillo</option>
    <option value="3D">3D</option>
    <option value="Imax">Imax</option>
  </select>
  <br />
  Refrigerios: <br />
  <input type="checkbox" name="postre" id="Palomitas" />
  Palomitas <br />
  <input type="checkbox" name="postre" id="Refresco" />
  Refresco
  <br />
  <input type="checkbox" name="postre" id="Chocolates" />
  Chocolates <br />
  <input type="submit" value="Enviar" onclick="datos()" />
</form>;
