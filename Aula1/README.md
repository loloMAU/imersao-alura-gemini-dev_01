![header](https://github.com/user-attachments/assets/beff2be5-ea27-4895-9c48-467b6a90d639)

# Aula 1

> [!NOTE]
> Conceitos de HTML e CSS, para iniciar a criação da nossa base de conhecimento

## O que foi feito

Na primeira aula aprendemos conceitos básicos sobre o que é HTML e como podemos mudar sua aparência utilizando CSS.

Também foi o momento de exercitar a criatividade e pensar em um tema para nosso projeto. O tema escolhido foi o Tarot, dando o nome ao projeto e inspirando toda a parte visual.

## Definindo a estrutura do projeto

> [!TIP]
> **Explore e leia os arquivos!** Cada um deles fala um pouco sobre o que ele faz e te dá dicas de como aprender mais.

Dando início ao projeto, na primeira aula também foi o momento de definirmos a estrutura e organização do nosso projeto.

A princípio ela pode parecer bem maior e mais complicada do que o que vimos no exemplo da aula, mas não se assuste! Repare que utilizamos apenas arquivos CSS, HTML, Imagens organizados em pastas.

Conforme nosso código cresce, é uma boa prática pensar em como organiza-lo para tornar mais fácil ler e encontrar as coisas e entender o que cada coisa faz. Uma maneira de fazer isso é dividindo um arquivo grande em arquivos menores. Foi isso que fizemos com os arquivos CSS aqui.

### Resumindo a estrutura:

**📂 Assets:**

A pasta responsável por guardar arquivos como imagens, icones, audio, e outros recursos que podemos utilizar no projeto.

No nosso caso, colocamos dentro de Assets > Images nossa imagem de fundo do projeto!

**📂 Styles:**

Nessa pasta centralizamos todos os nossos arquivos do tipo CSS.

O `main.css` Esse é nosso arquivo CSS principal, importado no index.html.

Em `typography.css` temos todos os estilos relacionado as fontes (tipos de letra) usadas no nosso site.

Assim como no javascript, também podemos utilizar variáveis no CSS. Declaramos essas variáveis em `variables.css`

E, por fim, o `reset.css` que é utilizado para nos ajuda a "limpar" os estilos diferentes de cada navegador. Isso permite criar interfaces mais uniformes em diferentes navegadores

**📂 Styles > Components**

Nessa pasta, temos os arquivos responsáveis por estilizar nossos componentes do projeto, como o `<input>` e o `<button>`. Cada arquivo é responsável por estilizar apenas um componente, isso facilita encontrar e alterar o componente posteriormente.

**📂 Styles > Utils**

Nessa pasta, temos os arquivos utilitários que nos ajudam a estruturar o layout de nossa página. Em `container.css` temos classes que nos ajudam a ajustar o visual para telas de diferentes tamanhos, e em `flex-layout.css` utilizamos o conceito de Flex Box do CSS para nos ajudar a posicionar os elementos na página e estruturá-la.

```markdown

└── 📁Aula1
    └── 📁assets
        └── 📁images
            └── bg-min.png
    └── 📁styles
        └── 📁components
            └── button.css
            └── index.css
            └── text-input.css
        └── 📁utils
            └── container.css
            └── flex-layout.css
            └── index.css
        └── main.css
        └── reset.css
        └── typography.css
        └── variables.css
    └── index.html
    └── README.md

```

# Prompts utilizados

### Para nos auxiliar com a estrutura do projeto

> Você é um desenvolvedor front-end sênior com experiência em diversos padrões de organização de projetos diferentes.
>
> Quando se trata de estrutura de projetos, qual é a maneira mais comum de se nomear arquivos e pastas? Usam-se letras minusculas ou maiúsculas, separador usando hífen ou underline?

**Resumo da resposta**

[addimg]

### Informações sobre as cartas de Tarot

Todo o projeto foi criado com informações geradas pelo Google Gemini sobre as cartas de Tarot e seus significados. Para isso, criamos uma persona no Google Gemini que irá nos auxiliar em todo o projeto

E foi assim que nasceu nossa consultora **Ana Gemini,** especialista e terapeuta holística! Ou GeminiAna, para os íntimos.

**Prompt:**
> \<persona>
> Você é uma mulher especialista em terapia holística. Possui grande conhecimento de Cabalá, Tarot e numerologia. Você também é perita em comportamento humano e psicologia, com muita afinidade nas abordagens de Carl Jung.
Você possui uma personalidade amigável e conselheira. Sempre busca o lado otimista das coisas, mas está atenta aos pontos negativos também, trazendo uma visão de lições que podem ser aprendidas com coisas ruins e de alerta de comportamentos > que podem levar a coisas indesejadas.
> \</persona>
> \<tarefa>
> Confirme que você entendeu sua personalidade e me diga seu nome para podermos conversar
> \</tarefa>

**Resultado:**

![Captura de tela 2024-09-05 150754](https://github.com/user-attachments/assets/6fa4e2c1-795b-4953-8dae-018c0d92d6f1)

### Gerar Imagem de fundo

Para gerar a imagem de fundo usamos o [ChatGPT](https://openai.com/chatgpt/) da OpenAi. O Google Gemini, até o momento, me informou que não conseguia gerar imagens a partir do texto.

**Prompt:**

> Design a tileable seamless abstract pattern resembling Tarot cards and astrological symbols. Use hand drawing and pointillism styles_

**Resultado:**

<img src="https://github.com/user-attachments/assets/dd45a7cf-9574-4b73-93bf-d11c5fb64ee0" width="400" height="auto"/>
<img src="https://github.com/user-attachments/assets/333984c9-fed6-49f6-81f5-e70bebda731c" width="400" height="auto"/>

# Resultado do projeto na Aula 1
![Aula1 - Desktop](https://github.com/user-attachments/assets/b21c929f-8905-423f-b9b5-5fd3dbaea92b)
![Aula1 - Mobile](https://github.com/user-attachments/assets/704180c5-46b9-4372-be3c-c45bd37c6a31)
