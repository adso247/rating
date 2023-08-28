// Creamos una representación visual de una calificación mediante elementos div.
// Referenciar la clase rating del HTML, guardandolo en una variable.
const ratingContainer = document.querySelector(".rating");
// Variable para saber cual es la cantidad de estrellas acuales.
let currentValue = 0;
// Variable que va a determinar la cantidad máxima de estrellas
const limit = 10;

// Creamos un array de elementos div usando el método map en una matriz generada.
const html = Array.from(Array(limit)).map((item, i) => {
    // Cada div representa un elemento de calificación y tiene clases y atributos únicos.
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
  });

// Asignamos el contenido generado en el array "html" al contenedor de calificación en el HTML.
ratingContainer.innerHTML = html.join("");

// Selecciona todos los elementos con la clase ".item" y agrega un oyente para el evento "mouseover"
document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        // Obtiene la posición del elemento en función del atributo "data-pos"
        const pos = item.getAttribute("data-pos");
        
        // Si el valor actual es igual a la posición más 1, no hace nada
        if (currentValue === parseInt(pos) + 1) {
            return; // No se realiza ninguna acción si la calificación ya ha sido seleccionada
        }

        // Remueve la clase "item-full" de todos los elementos con la clase ".item"
        document.querySelectorAll(".item").forEach((item) => {
            if (item.classList.contains("item-full")) {
                item.classList.remove("item-full");
            }
        });

        // Itera a través de los elementos y agrega la clase "item-full" a los elementos según la posición
        for (let i = 0; i <= pos; i++) {
            const item = document.querySelector(`.item-${i}`);
            
            // Agrega la clase "item-full" al elemento si no la tiene
            if (!item.classList.contains("item-full")) {
                item.classList.add("item-full");
            }
        }
        // Actualiza el valor de "currentValue" para reflejar la calificación seleccionada
        currentValue = parseInt(pos) + 1;
    });
    
    // Agrega un oyente de eventos "click" a cada elemento con la clase ".item"
    item.addEventListener("click", (e) => {
    // Obtiene la posición del elemento en función del atributo "data-pos"
    const pos = item.getAttribute("data-pos");
    
    // Actualiza el valor de "currentValue" para reflejar la calificación seleccionada más uno
    currentValue = parseInt(pos) + 1;
    
    // Muestra el valor actual de "currentValue" en la consola para propósitos de depuración
    console.log(currentValue);
});
});