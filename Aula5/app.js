function searchCard() {
  // Aqui utilizamos uma maneira diferente de declarar variaveis.
  // Usar "const" é uma boa prática quando queremos que nossa variável não seja alterada acidentalmente
  // Quer saber mais? Pergunte ao Gemini!
  // - Qual a diferença de declarar variáveis "let" e "const" no javascript?

  // Obtém o elemento em que exibiremos os resultados de busca
  const resultListElement = document.getElementById("search-results-list");
  // Obtém valor digitado pelo usuário no campo de texto
  const searchInputValue = document.getElementById("search-input").value;

  // Caso o campo de texto esteja vazio, retornamos uma mensagem ao usuário
  if (!searchInputValue) {
    resultListElement.innerHTML = "<p class='text-center'>Digite algum termo para buscar resultados</p>";
    return;
  }

  // Aqui usamos uma função diferente para nos ajudar a filtrar os dados.
  // As listas no javascript possuem um método chamado .filter() para esses casos!
  // Quer saber mais? Pergunte ao Gemini!
  // - Como funciona o método .filter() de uma lista no javascript?
  // - O que é uma "arrow function" no javascript?
  const filteredData = tarotCardsList.filter(
    // O método .filter() executa essa função dentro dele para cada elemento da lista,
    // assim como o "for(let dado of dados)" da aula.
    // Essa função retorna um valor VERDADEIRO ou FALSO para cada item da lista,
    // assim como o if() que usamos na aula para determinar se tinhamos que exibir
    // ou não o resultado na tela.
    function filterResults(entry){
      let name = entry.name.toLowerCase();
      let keywords = entry.keywords.toLowerCase();
      let value = searchInputValue.toLowerCase();
      // Retorna se devemos ou nao incluir o resultado na lista
      return name.includes(value) || keywords.includes(value);
    }
  )

  // Caso nossa lista filtrada esteja vazia, retornamos uma mensagem ao usuário
  // O ".length" retorna o tamanho de uma lista no javascript.
  if (!filteredData.length) { // Podemos ler isso como "Se a lista não tiver tamanho faça isso"
    // Nessa linha incluimos o termo digitado pelo usuário na mensagem usando o dinheirinho ${}!
    resultListElement.innerHTML = `<p class="text-center">Nenhum resultado encontrado para "${searchInputValue}" </p>`;
    return;
  }

  // Repare que no filtro acima, não temos nenhum HTML. Isso porque apenas filtramos nossa
  // lista de dados e removemos os itens que não devem ser exibidos. Agora precisamos exibir
  // esses resultados filtrados na tela.
  // Para isso vamos usar mesmo método for() criado na aula anterior, sem precisar alterar nada
  // da lógica para usar o if() dentro dele, pois nossa lista já está filtrada.
  // Alteramos apenas os dados declarados no for() para usar nossa lista já filtrada.

  // Variável que guarda nossos resultados de busca
  let searchResult = "";
  // Monta nossa lista HTML de resultados
  for (let entry of filteredData) { // Mudamos apenas aqui de "tarotCardsList" para "filteredData"
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
