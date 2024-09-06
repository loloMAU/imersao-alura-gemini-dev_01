function searchCard() {
  // Aqui utilizamos uma maneira diferente de declarar variaveis.
  // Usar "const" é uma boa prática quando queremos que nossa variável não seja alterada acidentalmente
  // Quer saber mais? Pergunte ao Gemini!
  // - Qual a diferença de declarar variáveis "let" e "const" no javascript?

  // Obtém o elemento em que exibiremos os resultados de busca
  const resultListElement = document.getElementById("search-results-list");

  // Variável que guarda nossos resultados de busca
  let searchResult = "";
  // Monta nossa lista HTML de resultados
  for (let entry of tarotCardsList) {
    searchResult += `
      <a class="card" href="${entry.link}" target="_blank">
        <div class="h-layout">
          <img style="width: 100px;" src="${entry.img}"/>
          <div class="v-layout middle fill-height fill-width">
            <div class="font-size-lg">${entry.name}</div>
            <p><strong>Palavras-chave:</strong> ${entry.keywords}</p>
          </div>
        </div>
      </a>
    `;
  }

  // Exibindo os resultados no HTML
  resultListElement.innerHTML = searchResult;
}
