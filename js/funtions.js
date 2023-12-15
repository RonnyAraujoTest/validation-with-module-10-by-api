function interpreta_respuesta(resp) {
  if (resp["status"]) {
    window.feedback.classList.remove("invalidID");
    window.feedback.classList.add("validID");
    window.feedback.innerHTML = "Cedula Valida.";
  } else {
    window.feedback.classList.remove("validID");
    window.feedback.classList.add("invalidID");
    window.feedback.innerHTML = "Cedula Invalida.";
  }
}

function handle() {
  fetch("https://module10-api.onrender.com/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      cedula: window.cedula.value,
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((json) => {
      interpreta_respuesta(json);
    });
}

window.onload = (even) => {
  handle();
};
