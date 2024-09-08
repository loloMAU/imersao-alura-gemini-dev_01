function luckOfTheDay() {
  const nameInputValue = document.getElementById("name-input").value.trim();
  const dateInputValue = document.getElementById("date-input").value.trim();
  const today = new Date().toDateString();

  if(!nameInputValue || !dateInputValue) {
    alert("Por favor, digite seu nome completo e data de nascimento para tirar a sorte do dia!");
    return;
  }

  const luckString = `${nameInputValue}${dateInputValue}${today}`;
  const luckSigil = btoa(luckString);
  const cardNumber = drawCardFromSigil(luckSigil);

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
    "Escolha um momento tranquilo para o jogo e feche os olhos por alguns instantes.\n\n"+
    "Concentre-se e peça mentalmente uma orientação para o seu dia.\n\n"+
    "Você só pode tirar uma carta, por isso, quando se sentir preparado embaralhe as cartas."
  );
}
