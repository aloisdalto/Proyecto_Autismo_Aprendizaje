function verificar() {
    var respuesta1 = document.querySelector('input[name="preg-1"]:checked');
    var respuesta2 = document.querySelector('input[name="preg-2"]:checked');
    var respuesta3 = document.querySelector('input[name="preg-3"]:checked');
    var respuesta4 = document.querySelector('input[name="preg-4"]:checked');

    if (respuesta1 && respuesta1.value === "opcion2" &&
      respuesta2 && respuesta2.value === "opcion1" &&
      respuesta3 && respuesta3.value === "opcion2" &&
      respuesta4 && respuesta4.value === "opcion3")  {
    alert("¡Felicidades, las respuestas son correctas!")
    window.location.href = "abecedario.html";
  } else {
    alert("Las respuestas son incorrectas, Intente otra vez!");
  }
}