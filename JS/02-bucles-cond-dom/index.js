document.addEventListener("DOMContentLoaded", function () {
  const demoParagraph = document.getElementById("demo");
  const btn = document.getElementById("changeColor");

  demoParagraph.innerText = "Este es un párrafo de ejemplo.";

  btn.addEventListener("click", () => {
    // Usando un bucle 'for' para cambiar el color de fondo
    console.log("EMPEZANDO");
    // for (let i = 0; i < 3; i++) {
    //   setTimeout(() => {
    //     console.log(`CAMBIANDO COLOR ${i}`); // template --> agregar variable (o contenido js) en un string
    //     demoParagraph.style.backgroundColor = getRandomColor();
    //   }, i * 1000);
    // }

    // Usando un bucle 'while' para cambiar el color de fondo
    // console.log("EMPEZANDO");
    let count = 0;

    while (count < 3) {
      count++;
      setTimeout(() => {
        console.log(`CAMBIANDO COLOR`);
        demoParagraph.style.backgroundColor = getRandomColor();
      }, count * 1000);
    }
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
