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