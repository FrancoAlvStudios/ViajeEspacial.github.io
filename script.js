// Espera a que el documento se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el botón por su ID
    const startButton = document.getElementById("startButton");

    // Añade un evento al botón para que muestre un mensaje al hacer clic
    startButton.addEventListener("click", function() {
        alert("¡Prepárate para volar por el espacio!");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    startButton.addEventListener("click", function() {
        score += 10; // Aumenta la puntuación en 10 cada vez que se hace clic
        scoreDisplay.textContent = `Puntuación: ${score}`; // Actualiza la puntuación en la página
        alert("¡Prepárate para volar por el espacio! Tu puntuación ha aumentado.");
    });
});

// locoooooooooooooooooooooooooooooooooooooooooooooooooooooo
const carrito = [];

    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        alert(`${nombre} ha sido añadido al carrito.`);
    }

    document.querySelectorAll('.producto button').forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const nombre = boton.parentElement.querySelector('h3').textContent;
            const precio = boton.parentElement.querySelector('p:nth-child(3)').textContent;
            agregarAlCarrito(nombre, precio);
        });
    });