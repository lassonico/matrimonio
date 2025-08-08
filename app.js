console.log("On line")
 // Simulación de base de datos de contactos
const contactos = [
 { telefono: "3001234567", nombre: "Carlos" },
 { telefono: "3109876543", nombre: "Ana" },
 { telefono: "3205551122", nombre: "Luis" },
 { telefono: "3208402599", nombre: "Lina" }
];
 // Función para obtener parámetros de la URL
function obtenerParametro(nombre) {
 const urlParams = new URLSearchParams(window.location.search);
 return urlParams.get(nombre);
}
 // Buscar el número en la lista y mostrar el nombre
const telefono = obtenerParametro("telefono");
const contacto = contactos.find(c => c.telefono === telefono);
const mensaje = document.getElementById("mensaje");
if (contacto) {
 mensaje.textContent = `Hola ${contacto.nombre}, acompañanos en éste día y celebra con nosotros ésta nueva etapa en nuestras vidas.`;
} else {
 mensaje.textContent = "No se encontró tu número en la base de datos.";
}


// TEXTO CON EFECTO MAQUINA DE ESCRIBIR

function efectoMaquinaDeEscribir(texto, elementoId, velocidad = 100, pausa = 2000) {
    const el = document.getElementById(elementoId);
    let index = 0;
    let escribiendo = true;
  
    function escribir() {
      if (escribiendo) {
        if (index < texto.length) {
          el.textContent += texto.charAt(index);
          index++;
          setTimeout(escribir, velocidad);
        } else {
          escribiendo = false;
          setTimeout(borrar, pausa);
        }
      }
    }
  
    function borrar() {
      if (!escribiendo) {
        if (index > 0) {
          el.textContent = texto.substring(0, index - 1);
          index--;
          setTimeout(borrar, velocidad / 2);
        } else {
          escribiendo = true;
          setTimeout(escribir, 500);
        }
      }
    }
  
    escribir();
  }

efectoMaquinaDeEscribir("¡Estás cordialmente invitado a nuestro matrimonio!", "typewriter");


// (function(){emailjs.init("zWBQvU7UzVSMDeCkT");})();
  
function enviarConfirmacion() {
emailjs.sendForm('service_7c2hsj4', 'template_nfrrcsi', '#formulario')
    .then(function(response) {
    alert(`Gracias por confirmar tu asistencia ${contacto.nombre}. ¡Nos vemos en la boda!`);
    }, function(error) {
    alert("Hubo un error al enviar la confirmación. Intenta nuevamente.");
    console.error(error);
    });
}

function buscarNombre(telefono) {
    const contacto = contactos.find(c => c.telefono === telefono);
    return contacto ? contacto.nombre : null;
}

window.addEventListener("load", function() {
    setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("contenido").style.display = "block";

    const telefono = obtenerParametro("telefono");
    const nombre = buscarNombre(telefono);

    const mensaje = document.getElementById("mensaje");
    if (nombre) {
        mensaje.textContent =
        `Hola ${nombre}, esta es tu invitación a nustro matrimonio.
        `;
    } else {
        mensaje.textContent = "Lo sentimos no te encontramos en nuestra lista de invitados.";
    }
    }, 6000);
});

// BOTON DE MUSICA

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const button = document.getElementById("toggle-music");

    let isPlaying = false;

    button.addEventListener("click", () => {
      // Verifica si el audio está cargado correctamente
      if (!audio) {
        console.error("Elemento de audio no encontrado.");
        return;
      }

      // Intenta reproducir el audio
      if (!isPlaying) {
        audio.play().then(() => {
          button.textContent = "⏸️";
          isPlaying = true;
        }).catch(e => {
          console.log("Error al intentar reproducir:", e);
        });
      } else {
        audio.pause();
        button.textContent = "▶️";
        isPlaying = false;
      }
    });
  });

