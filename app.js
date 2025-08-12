console.log("On line")


const contactos = [
    { telefono: "3001234567", nombre: "Carlos" },
    { telefono: "3109876543", nombre: "Ana" },
    { telefono: "3205551122", nombre: "Luis y acompañante" },
    { telefono: "3208402599", nombre: "Lina y Esposo" }
  ];

  // Variable global para guardar el nombre
  let nombreGlobal = null;

  // Función para obtener parámetros de la URL
  function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
  }

  // Buscar nombre por teléfono
  function buscarNombre(telefono) {
    const contacto = contactos.find(c => c.telefono === telefono);
    return contacto ? contacto.nombre : null;
  }

  // Mostrar contenido después del loader
  window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("contenido").style.display = "block";

      const telefono = obtenerParametro("telefono");
      nombreGlobal = buscarNombre(telefono); // Asignación a variable global

      const mensaje_2 = document.getElementById("mensaje_2");
      if (nombreGlobal) {
        mensaje_2.textContent = `${nombreGlobal}`;
      } else {
        mensaje_2.textContent = "No te encontramos en nuestra lista de invitados.";
      }
    }, 4000);
  });

  // Función que usa el nombre global
//   function enviarConfirmacion() {
//     if (nombreGlobal) {
//       alert(`Gracias por confirmar tu asistencia, ${nombreGlobal}!`);
//       // Aquí podrías enviar el nombre a una API o por correo
//     } else {
//       alert("No pudimos identificarte.");
//     }
//   }

  
document.getElementById("confirmar").addEventListener("click", function () {
    const telefono = obtenerParametro("telefono");
    const estado = document.getElementById("estado");

    if (!nombreGlobal) {
      estado.textContent = "No pudimos identificarte.";
      return;
    }

    fetch("https://formspree.io/f/mdkdbeyv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        nombre: nombreGlobal,
        telefono: telefono,
        mensaje: `${nombreGlobal} ha confirmado su asistencia al matrimonio.`
      })
    })
    .then(response => {
      if (response.ok) {
        estado.textContent = `Gracias por confirmar tu asistencia, ${nombreGlobal}!`;
      } else {
        estado.textContent = "Hubo un problema al enviar tu confirmación.";
      }
    })
    .catch(error => {
      estado.textContent = "Error de conexión al enviar la confirmación.";
    });
  });

  
  

// (function(){emailjs.init("zWBQvU7UzVSMDeCkT");})();
  
// function enviarConfirmacion() {
//     emailjs.sendForm('service_7c2hsj4', 'template_nfrrcsi', '#formulario')
//         .then(function(response) {
//         alert(`Gracias por confirmar tu asistencia ${nombreGlobal}. ¡Nos vemos en la boda!`);
//         }, function(error) {
//         alert("Hubo un error al enviar la confirmación. Intenta nuevamente.");
//         console.error(error);
//     });
// }


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

efectoMaquinaDeEscribir("¡Y queremos que nos acompañes en éste día tan especial!", "typewriter");

//animacion de petalos

const container = document.querySelector('.petals-container');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    container.appendChild(petal);

    setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 500);

// Animacion de petalis fin

// CONTEO REGRESIVO

const valoresPrevios = {
dias: null,
horas: null,
minutos: null,
segundos: null
};

function actualizarContador() {
const fechaEvento = new Date("2025-09-13T00:00:00");
const ahora = new Date();
const diferencia = fechaEvento - ahora;

if (diferencia <= 0) {
    document.getElementById("contador").innerHTML = "<div class='unidad'>¡Hoy es el gran día!</div>";
    return;
}

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
const segundos = Math.floor((diferencia / 1000) % 60);

actualizarUnidad("dias", dias, "Días");
actualizarUnidad("horas", horas, "Horas");
actualizarUnidad("minutos", minutos, "Min");
actualizarUnidad("segundos", segundos, "Seg");
}

function actualizarUnidad(id, valor, etiqueta) {
const unidad = document.getElementById(id);
unidad.setAttribute("data-label", etiqueta);

if (valoresPrevios[id] !== valor) {
    unidad.innerHTML = `<div class="numero">${valor}</div>`;
    valoresPrevios[id] = valor;
} else {
    // Si no cambia, no se actualiza ni se anima
    unidad.querySelector(".numero")?.classList.remove("numero");
    unidad.innerHTML = `<div>${valor}</div>`;
}
}

setInterval(actualizarContador, 1000);
actualizarContador();

// CONTEO REGRESIVO FIN


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

