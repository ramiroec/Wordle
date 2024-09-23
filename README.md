# 🔠 **Wordle de 5 Letras** 🔠

¡Bienvenido a la implementación de un juego de Wordle en JavaScript! 🎉

Este proyecto te desafía a adivinar una palabra de 5 letras en un máximo de 6 intentos. Con cada intento, recibirás pistas sobre si tus letras están en la palabra y si están en la posición correcta.

## 📝 **Características**
- 🎯 Palabra objetivo seleccionada aleatoriamente de una lista de 10 palabras de 5 letras.
- ⏳ Tienes **6 intentos** para adivinar la palabra correcta.
- 📊 Las letras se marcan como:
  - 🟩 **Correctas**: La letra está en la palabra y en la posición correcta.
  - 🟨 **Presente**: La letra está en la palabra pero en la posición incorrecta.
  - ⬜ **Ausente**: La letra no está en la palabra.
- 🖥️ Fácil de usar con una interfaz gráfica simple.

## 🚀 **Cómo jugar**
1. Ingresa una palabra de **5 letras** en el cuadro de entrada.
2. Haz clic en el botón **Enviar**.
3. El tablero se llenará con tus letras:
   - Las letras correctas estarán en **verde**.
   - Las letras presentes en la palabra pero mal ubicadas estarán en **amarillo**.
   - Las letras que no están en la palabra se mostrarán en **gris**.
4. Sigue intentando hasta que adivines la palabra o se te acaben los intentos.

## 📂 **Estructura del Proyecto**
- **`index.html`**: Contiene la estructura de la página web y el tablero del juego.
- **`style.css`**: Añade estilo y colores al tablero y las celdas.
- **`script.js`**: Lógica del juego en JavaScript, donde se maneja el sorteo de la palabra y la verificación de las conjeturas.

## 🛠️ **Instalación y Ejecución**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/ramiroec/Wordle.git
    ```
2. Navega al directorio del proyecto:
   ```bash
cd wordle-5-letras
    ```
3. Abre el archivo index.html en tu navegador.

## 🌈 Estilos de Juego
🟩 Verde: La letra está en la posición correcta.
🟨 Amarillo: La letra está en la palabra pero en la posición incorrecta.
⬜ Gris: La letra no está en la palabra.

## 🤖 Tecnologías Utilizadas
HTML 🌐: Para la estructura de la página.
CSS 🎨: Para los estilos y diseño visual.
JavaScript 💻: Para la lógica del juego.
