![header](https://github.com/user-attachments/assets/beff2be5-ea27-4895-9c48-467b6a90d639)

# Aula 5

> [!NOTE]
> Filtrando os resultados de busca com javascript

## O que foi feito

Nessa aula incluimos a lógica na nossa função javascript para filtrar a lista de resultados de acordo com o termo fornecido pelo usuário. Utilizamos uma maneira de filtrar os dados um pouco diferente do apresentado na aula, mas o resultado é o mesmo!

> 🤔 Mas qual é a melhor forma? Qual a maneira correta? A resposta para isso sempre é: Depende!

Na programação, muitas vezes é possível fazer uma mesma coisa de diversas maneiras diferentes. É importante entender os benefícios e de cada abordagem para saber aplicar na melhor situação.


## Filtrando a lista de modo diferente

Aqui usamos uma função diferente para nos ajudar a filtrar os dados. As listas no javascript possuem um método chamado `.filter()` para esses casos!

### Vamos entender parte por parte:

Começamos declarando uma nova variável que ira receber nossos resultados filtrados. Utilizamos o `tarotCardsList.filter()` para dizer ao javascript que queremos filtra nossa lista de dados.
```javascript
const filteredData = tarotCardsList.filter();
```

Em seguida, precisamos dizer a essa função, como ela deve filtrar a lista. Para isso vamos usar a seguinte lógica:

Para cada item da nossa lista, chamamos de `entry`, vamos usar o nome e as palavras-chave das cartas para filtrar a lista, `name` e `keywords` respectivamente.

Para compararmos se o termo digitado coincide com alguma palavra da carta, usamos o `.toLowerCase()` assim como na aula. Dessa forma letras maiúsculas e minúsculas não importam.

```javascript
let name = entry.name.toLowerCase(); // Guarda o nome em letras minusculas
let keywords = entry.keywords.toLowerCase(); // Guarda aas palavras-chave em letras minusculas
let value = searchInputValue.toLowerCase(); // Guarda o termo digitado em letras minusculas
```

Então usamos o método `.includes()` para comparar se o termo digitado é o mesmo do nome ou palavras-chave, assim como vimos na aula.

```javascript
name.includes(value) || keywords.includes(value);
```

 ### Mas como dizemos para o `.filter()` executar tudo isso?

 Nós criamos uma função javascript que faz tudo isso!

```javascript
// Essa função espera receber uma variável "entry" de quem for utilizá-la
// O método ".filter()" fará isso para nós!
function filterResults(entry){
  let name = entry.name.toLowerCase(); // Guarda o nome em letras minusculas
  let keywords = entry.keywords.toLowerCase(); // Guarda aas palavras-chave em letras minusculas
  let value = searchInputValue.toLowerCase(); // Guarda o termo digitado em letras minusculas
  // Retorna verdadeiro ou falso para dizer ao ".filter()" se ele remove ou não o item da lista
  return name.includes(value) || keywords.includes(value);
}
```

Por fim, passamos nossa função para o `.filter()` executar ela para cada item da nossa lista. Caso ela volte `true`, o item fica na lista, caso retorne `false`, o item sai da lista.

Nosso código para filtrar os resultados ficou assim:

```javascript
// A função ".filter()" receber nossa outra função pasa saber como filtrar nossas cartas!
// Para cada item da lista, ele executa o "filterResults(entry)" passando o item "entry" para a função.
const filteredData = tarotCardsList.filter(
  function filterResults(entry){ // Função criada para dizer como filtrar os itens
    let name = entry.name.toLowerCase();
    let keywords = entry.keywords.toLowerCase();
    let value = searchInputValue.toLowerCase();

    // Para cada item da lista, o ".filter()" recebe um verdadeiro ou falso como resposta
    return name.includes(value) || keywords.includes(value);
  }
)
```

> [!IMPORTANT]
> Ficou com dúvida? Pergunte ao Gemini!
> - Como funciona o método .filter() de uma lista no javascript?
> - O que é uma "arrow function" no javascript?

# Resultado do projeto na Aula 5
[add img]
[add img]



