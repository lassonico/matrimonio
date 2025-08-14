console.log("On line")

const contactos = [
    { nombre: "Esteban Rojas y Señora", numero: "3103012233" },
  { nombre: "MILENA LOSADA", numero: "3118405972" },
  { nombre: "SAMARA ROJAS", numero: "3105759169" },
  { nombre: "MANUEL LOSADA Y SEÑORA", numero: "3229001778" },
  { nombre: "SEBASTIAN DIAZ", numero: "3232215103" },
  { nombre: "LIBORIO TRUJILLO Y SEÑORA", numero: "3114418719" },
  { nombre: "TULIA ROSA Y SARA", numero: "3133823137" },
  { nombre: "YEISON TRUJILLO Y SEÑORA", numero: "3106983351" },
  { nombre: "DEYNER SILVA Y SEÑORA", numero: "3163435259" },
  { nombre: "TIO CHUCHO Y ROSARIO", numero: "3173150496" },
  { nombre: "FABIAN MOSQUERA Y SEÑORA", numero: "3184811364" },
  { nombre: "GIOVANNY LOSADA, SEÑORA E HIJA", numero: "3123416289" },
  { nombre: "HENRY FIERRO Y SEÑORA", numero: "3245045032" },
  { nombre: "DUBER LOSADA Y SEÑORA", numero: "3124936587" },
  { nombre: "NICOLAS LASSO Y SEÑORA", numero: "3175097713" },
  { nombre: "AUGUSTO", numero: "3223725333" },
  { nombre: "JHON HENRY Y SEÑORA", numero: "3144301774" },
  { nombre: "LUIS CAMACHO Y SEÑORA", numero: "3213044320" },
  { nombre: "JAVIER FIERRO", numero: "3215838866" },
  { nombre: "SANTIAGO VILLARREAL Y SEÑORA", numero: "3023605464" },
  { nombre: "WILTON ROJAS, SEÑORA, DANA Y GALA ROJAS", numero: "3204551584" },
  { nombre: "JORGE RAMIREZ", numero: "3152342723" },
  { nombre: "DUVAN CHALA Y SEÑORA", numero: "3172435230" },
  { nombre: "JOSE IGNACIO AVILA", numero: "3219426852" },
  { nombre: "VICTOR POLANIA", numero: "3185896177" },
  { nombre: "MONICA BARREIRO", numero: "3227439528" },
  { nombre: "WALTER CHINCHILLA Y SEÑORA", numero: "3104910539" },
  { nombre: "FELIPE RODRIGUEZ Y MARIA FERNANDA VARGAS", numero: "3046793041" },
  { nombre: "LUIS CALIXTO BRAVO Y EDNA XIMENA BERMEO", numero: "3214354500" },
  { nombre: "SEBASTIAN SOTELO Y SAUL VALLEJO", numero: "3004939849" },
  { nombre: "RAMIRO TAMAYO", numero: "3123580342" },
  { nombre: "MARIO VALBUENA Y SEÑORA", numero: "3174361270" },
  { nombre: "SERGIO MONA Y SRA", numero: "3219653557" },
  { nombre: "JHON JAIVER LOSADA", numero: "3207671588" },
  { nombre: "ELISA ALARCON Y ESPOSO", numero: "3214890463" },
  { nombre: "MARLIO VALBUENA Y SEÑORA", numero: "3118257181" },
  { nombre: "ANSELMO AREVALO Y SEÑORA", numero: "3156092467" },
  { nombre: "ALVARO CUELLAR Y SEÑORA", numero: "3153113658" },
  { nombre: "LAURA AREVALO ROJAS", numero: "3016066824" },
  { nombre: "FRANCISCO LOPEZ Y SEÑORA", numero: "3202616153" },
  { nombre: "YAIR MANZANARES", numero: "3106876498" },
  { nombre: "BERCELIO PASTRANA Y SEÑORA", numero: "3205213983" },
  { nombre: "LEIDY TRUJILLO", numero: "3180618858" },
  { nombre: "RAFAEL LOSADA Y SEÑORA", numero: "3138115528" },
  { nombre: "DANIEL ZAMORA Y SEÑORA", numero: "3118792462" },
  { nombre: "MAURICIO RAMIREZ Y SEÑORA", numero: "3103221676" },
  { nombre: "JAVIER PUENTES Y ESPOSA", numero: "3173805646" },
  { nombre: "DARIT MOLINARES Y LORENA MUÑOZ", numero: "3223111800" },
  { nombre: "JOSE SUAREZ Y SEÑORA", numero: "3182222070" },
  { nombre: "NATALIA VALENCIA", numero: "3170434492" },
  { nombre: "RODOLFO CUMBE", numero: "3102269254" },
  { nombre: "JHON FREDY CASTAÑEDA", numero: "3155372283" },
  { nombre: "ANDREY PERDOMO", numero: "3219858811" },
  { nombre: "YENNY MENDEZ", numero: "3058290372" }
];

console.log(contactos[0])

  // Variable global para guardar el nombre
  let nombreGlobal = null;

  // Función para obtener parámetros de la URL
  function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
  }

  // Buscar nombre por teléfono
  function buscarNombre(telefono) {
    const contacto = contactos.find( c => c.numero === telefono);
    return contacto ? contacto.nombre : null;
  }

  // Mostrar contenido después del loader
//   window.addEventListener("load", function() {
//     setTimeout(function() {
//       document.getElementById("loader").style.display = "none";
//       document.getElementById("contenido").style.display = "block";
      
//       const textoInv = document.getElementById("texto_invitancion");
//       const btn = document.getElementById("btn_confirmar");
//       const telefono = obtenerParametro("telefono");
//       nombreGlobal = buscarNombre(telefono); // Asignación a variable global

      
//       const mensaje_2 = document.getElementById("mensaje_2");

//       if (nombreGlobal) {
//         mensaje_2.textContent = `${nombreGlobal}`;
//         mensaje_2.style.fontFamily = "Great Vibes, cursive";
//       } else {
//         mensaje_2.textContent = "No te encontramos en nuestra lista de invitados.";
//         btn.style.display ="none";
//         textoInv.style.display ="none";
//       }
//     }, 4000);
//   });

// Función para capitalizar cada palabra del nombre
function capitalizarNombre(nombre) {
    return nombre
      .toLowerCase()
      .replace(/(?:^|\s|,|-|\.|\/|¿|¡|!|\(|\)|:|;|")([a-záéíóúñü])/g, (match) => match.toUpperCase());
  }
  
  window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("contenido").style.display = "block";
      
      const textoInv = document.getElementById("texto_invitancion");
      const btn = document.getElementById("btn_confirmar");
      const telefono = obtenerParametro("telefono");
      nombreGlobal = buscarNombre(telefono); // Asignación a variable global
  
      // Normaliza el nombre aquí, si existe
      if (nombreGlobal) {
        nombreGlobal = capitalizarNombre(nombreGlobal);
      }
      
      const mensaje_2 = document.getElementById("mensaje_2");
  
      if (nombreGlobal) {
        mensaje_2.textContent = `${nombreGlobal}`;
        mensaje_2.style.fontFamily = "Great Vibes, cursive";
      } else {
        mensaje_2.textContent = "No te encontramos en nuestra lista de invitados.";
        btn.style.display ="none";
        textoInv.style.display ="none";
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

  
document.getElementById("confirmar").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
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
    .then(response => response.json())
    .then(data => {
      if (data.ok || data.success || data.message === "Form submitted successfully") {
        estado.textContent = `Gracias por confirmar tu asistencia, ${nombreGlobal}!`;
      } else {
        estado.textContent = "Hubo un problema al enviar tu confirmación.";
      }
    })
    .catch(error => {
      estado.textContent = "Error de conexión al enviar la confirmación.";
      console.error("Error:", error);
    });
  });


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

