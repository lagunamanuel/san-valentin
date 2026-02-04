const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const preguntaBox = document.getElementById('pregunta-box');
const mensajeFinal = document.getElementById('mensaje-final');

// Función que mueve el botón a una posición aleatoria
function moverBoton(e) {
    // Si es un evento táctil (móvil), evitamos que el navegador haga cosas raras
    // como intentar hacer scroll o zoom al tocar el botón
    if (e && e.type === 'touchstart') {
        e.preventDefault();
    }

    const ventanaAncho = window.innerWidth;
    const ventanaAlto = window.innerHeight;

    // Restamos 150px para asegurar que no se salga de la pantalla
    // (en el móvil los bordes son traicioneros)
    const nuevoX = Math.random() * (ventanaAncho - 150);
    const nuevoY = Math.random() * (ventanaAlto - 150);

    // Aplicamos las nuevas coordenadas
    btnNo.style.left = nuevoX + 'px';
    btnNo.style.top = nuevoY + 'px';
}

// Evento para PC (cuando el ratón pasa por encima)
btnNo.addEventListener('mouseover', moverBoton);

// Evento para MÓVIL (cuando el dedo toca la pantalla)
// Usamos { passive: false } para que el navegador nos permita usar preventDefault()
btnNo.addEventListener('touchstart', moverBoton, { passive: false });

// Lógica del botón "Sí"
btnSi.addEventListener('click', () => {
    preguntaBox.style.display = 'none'; // Ocultamos la pregunta
    mensajeFinal.classList.remove('oculto'); // Mostramos el mensaje
    
    // Cambiamos el fondo a un color más festivo
    document.body.style.backgroundColor = "#ffcccc";
});
