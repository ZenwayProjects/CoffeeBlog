const datos = {
  name: "",
  email: "",
  message: "",
};

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#message");
const form = document.querySelector(".form");

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  //console.log(e.target.value);
  //console.log(datos);
}

name.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

/* Validar formulario */
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const { name, email, message } = datos;

  if (name == "" || email == "" || message == "") {
    showAlert("Todos los campos son obligatorios", true);
    return;
  }
  showAlert("Datos enviados correctamente");
});

/* Mostrar alerta en pantalla */

function showAlert(mensaje, error = null) {
  const alert = document.createElement("P");
  alert.textContent = mensaje;

  if (error) {
    alert.classList.add("error");
  } else {
    alert.classList.add("correct");
  }

  form.appendChild(alert);

  //Desaparecer el mensaje de error

  setTimeout(() => {
    alert.remove();
  }, 4000);
}
