function scopeLet() {
  var x = 31;
  if (true) {
    var x = 71; // misma variable
    document.write("var x: " + x + "</br>"); // 71
  }
  document.write("var x: " + x + "</br>"); // 71

  let y = 31;
  if (true) {
    let y = 71; //variable diferente
    document.write("let y : " + y + "</br>"); // 71
  }
  document.write("let y : " + y + "</br>"); // 31
}
