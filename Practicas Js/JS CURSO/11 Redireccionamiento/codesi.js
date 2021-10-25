function codesi() {
  var pagina = confirm("¿Quieres abrir la pagina de Grupo Codesi");

  if (pagina) {
    location.href = "https://www.grupocodesi.com/";
  } else {
    location.href = "http://www.google.com";
  }
}
