function askAQuestion() {
  const questionInputValue = document.getElementById("question-input").value.trim();
  const today = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  if(!questionInputValue) {
    alert("Por favor, digite o resumo da sua pergunta no campo de texto para consultar as cartas");
    return;
  }

  const questionString = `${questionInputValue}${today}${time}`;
  const questionSigil = btoa(questionString);
  const cardNumber = drawCardFromSigil(questionSigil);

  window.location.href = `/pages/tarot-card.html?number=${cardNumber}`;
}

function drawCardFromSigil(sigil) {
  const sigilNumerology = getNumberFromSigil(sigil);
  const cardNumber = (sigilNumerology % DATABASE.length) - 1;

  return cardNumber;
}

function getNumberFromSigil(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function howItWorks() {
  alert(
    "Escoha um momento calmo para jogar, concentre-se na sua respiração por alguns minutos.\n\n"+
    "Pense sobre o tema de sua pergunta e escreva de forma resumida no campo de texto\n\n"+
    "Quando estiver preparado(a), clique em \"Consultar cartas\" e reflita sobre o conselho dado pela carta sorteada."
  );
}
