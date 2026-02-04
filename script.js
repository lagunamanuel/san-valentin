const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const preguntaBox = document.getElementById('pregunta-box');
const mensajeFinal = document.getElementById('mensaje-final');

// Lógica para mover el botón "No"
btnNo.addEventListener('mouseover', () => {
    // Calculamos el ancho y alto visible de la ventana
    const ventanaAncho = window.innerWidth;
    const ventanaAlto = window.innerHeight;

    // Generamos coordenadas aleatorias
    // Restamos 100px para evitar que el botón se salga mucho de la pantalla
    const nuevoX = Math.random() * (ventanaAncho - 100);
    const nuevoY = Math.random() * (ventanaAlto - 100);

    // Aplicamos las nuevas coordenadas
    btnNo.style.left = nuevoX + 'px';
    btnNo.style.top = nuevoY + 'px';
});

// Lógica para el botón "Sí"
btnSi.addEventListener('click', () => {
    preguntaBox.style.display = 'none'; // Ocultamos la pregunta
    mensajeFinal.classList.remove('oculto'); // Mostramos el mensaje final
    
    // Opcional: Lanzar confeti o cambiar el color de fondo aquí
    document.body.style.backgroundColor = "#ffcccc";
});
