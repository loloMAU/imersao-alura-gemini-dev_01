function onload() {
  const urlParams = new URLSearchParams(window.location.search);
  const cardNumber = urlParams.get('number');

  const selectedCard = DATABASE[cardNumber];

  if(!selectedCard) {
    window.location.replace("/");
    return;
  }

  console.log(selectedCard);
}
