document.addEventListener("DOMContentLoaded", () => {
  const cardImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
  ];
  let cards = [];
  let selectedCards = [];
  let matchedPairs = 0;

  // Duplica las imágenes para hacer pares
  cards = [...cardImages, ...cardImages];

  // Baraja las cartas
  cards.sort(() => Math.random() - 0.5);

  // Genera las cartas en el HTML
  const gameContainer = document.getElementById("game-container");
  cards.forEach((image, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = index;
    cardElement.style.backgroundImage = `url(${image})`;
    cardElement.addEventListener("click", handleCardClick);
    gameContainer.appendChild(cardElement);
  });

  // Voltea las cartas después de 3 segundos
  setTimeout(() => {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.add("flip");
    });
  }, 3000);

  // Función para manejar el clic en una carta
  function handleCardClick(event) {
    const clickedCard = event.target;

    // Evitar clics en cartas ya emparejadas o en más de dos cartas
    if (
      selectedCards.length === 2 ||
      clickedCard.classList.contains("flip") ||
      clickedCard.classList.contains("matched")
    ) {
      return;
    }

    // Voltea la carta
    clickedCard.classList.add("flip");
    selectedCards.push(clickedCard);

    // Si se seleccionaron dos cartas, verifica si son iguales
    if (selectedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  // Función para verificar si las cartas seleccionadas son iguales
  function checkMatch() {
    const [card1, card2] = selectedCards;
    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;

    if (cards[index1] === cards[index2]) {
      // Cartas iguales, marcarlas como emparejadas
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedPairs++;

      // Reinicia la lista de cartas seleccionadas
      selectedCards = [];

      // Verifica si todas las cartas han sido emparejadas
      if (matchedPairs === cardImages.length) {
        alert("¡Ganaste!");
      }
    } else {
      // Cartas diferentes, voltea las cartas de nuevo
      card1.classList.remove("flip");
      card2.classList.remove("flip");

      // Reinicia la lista de cartas seleccionadas
      selectedCards = [];
    }
  }
});
