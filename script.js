// Lista de 10 palabras, todas de 5 letras
const wordList = ["mango", "perro", "gatos", "carro", "llama", "banco", "avion", "plomo", "robot", "tigre"];

// Selecciona una palabra al azar de la lista
const targetWord = wordList[Math.floor(Math.random() * wordList.length)];

const maxAttempts = 6; // Número máximo de intentos permitidos
let attempts = 0; // Contador de intentos

document.addEventListener("DOMContentLoaded", () => {
    // Crear una cuadrícula de 5 columnas por cada intento (6 intentos = 30 celdas)
    const grid = document.getElementById("grid");
    for (let i = 0; i < 5 * maxAttempts; i++) {
        const cell = document.createElement("div");
        grid.appendChild(cell); // Añadir cada celda al grid
    }

    // Asignar el evento click al botón de enviar
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => {
        const guess = document.getElementById("guess").value.toLowerCase(); // Obtener la conjetura del usuario
        if (guess.length !== 5) { // Validar que la palabra tenga 5 letras
            document.getElementById("message").textContent = "La palabra debe tener 5 letras.";
            return;
        }
        if (attempts >= maxAttempts) { // Verificar si ya se alcanzó el máximo de intentos
            document.getElementById("message").textContent = "Has agotado todos los intentos.";
            return;
        }
        checkGuess(guess); // Verificar la conjetura
    });
});

// Función que comprueba la conjetura del usuario contra la palabra objetivo
function checkGuess(guess) {
    const grid = document.getElementById("grid");
    const cells = Array.from(grid.getElementsByTagName("div")); // Obtener todas las celdas del grid
    const start = attempts * 5; // Calcular dónde empezar a llenar las celdas en función del número de intentos

    // Comparar cada letra de la conjetura con la palabra objetivo
    for (let i = 0; i < 5; i++) {
        const cell = cells[start + i];
        cell.textContent = guess[i]; // Mostrar la letra en la celda correspondiente

        // Verificar si la letra está en la posición correcta
        if (guess[i] === targetWord[i]) {
            cell.classList.add("correct"); // Letra correcta en la posición correcta
        } 
        // Verificar si la letra está en la palabra pero en una posición incorrecta
        else if (targetWord.includes(guess[i])) {
            cell.classList.add("present"); // Letra presente en la palabra pero en la posición incorrecta
        } 
        // La letra no está en la palabra
        else {
            cell.classList.add("absent"); // Letra ausente en la palabra
        }
    }

    // Si la conjetura es correcta, mostrar mensaje de victoria
    if (guess === targetWord) {
        document.getElementById("message").textContent = "¡Felicidades, has ganado!";
    } else {
        attempts++; // Incrementar el número de intentos
        // Si se alcanzó el máximo de intentos, mostrar la palabra correcta
        if (attempts >= maxAttempts) {
            document.getElementById("message").textContent = `Has perdido. La palabra era "${targetWord}".`;
        }
    }

    // Limpiar el campo de entrada para la siguiente conjetura
    document.getElementById("guess").value = "";
}
