function onload() {
  const urlParams = new URLSearchParams(window.location.search);
  const cardNumber = urlParams.get('number');

  const selectedCard = DATABASE[cardNumber];

  if(!selectedCard) {
    window.location.replace("/");
    return;
  }

  // Executa a função para preencher as informações da página com a carta selecionada
  renderPageInformation(selectedCard);
}

function renderPageInformation(selectedCard) {
  // Preenche a imagem da carta
  const cardImageElement = document.getElementById("card-image");
  cardImageElement.src = selectedCard.img;

  // Preenche o nome da carta
  const cardNameElement = document.getElementById("card-name");
  cardNameElement.innerHTML = selectedCard.name;
}
