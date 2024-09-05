function searchCard() {
  let resultListElement = document.getElementById("search-results-list");

  let searchResult = "";

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

  resultListElement.innerHTML = searchResult;
}
