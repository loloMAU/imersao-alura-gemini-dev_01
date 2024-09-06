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

  // Preenche a descrição da carta
  const cardDescriptionElement = document.getElementById("card-description");
  cardDescriptionElement.innerHTML = renderParagraphs(selectedCard.description);

  // Preenche informações de numerologia da carta
  const cardNumerologyElement = document.getElementById("card-numerology");
  cardNumerologyElement.innerHTML = renderParagraphs(selectedCard.numerology);

  // Preenche informações de palavras-chave da carta
  const cardKeywordsElement = document.getElementById("card-keywords");
  cardKeywordsElement.innerHTML = `<p><strong>Palavras-chave: </strong>${selectedCard.keywords}</p>`;
}

// Essa função recebe uma lista de textos e retorna cada item da lista em um elemento <p> HTML
function renderParagraphs(textList){
  let textResult = "";

  for(item of textList) {
    textResult+= `
      <p>${item}</p>
    `;
  }

  return textResult;
}
