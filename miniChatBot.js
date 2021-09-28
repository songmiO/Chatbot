function chat() {
  const inputBox = document.getElementsByClassName('inputBox');
  const chatBotBtn = document.getElementsByClassName('chatBotBtn');

  if (inputBox.value === '반가워') {
    console.log('나도 반가워~');
  } else if (inputBox.value === '좋아!') {
    console.log('나두 좋아!!');
  }
  chatBotBtn.addEventListener('check', chat);
}
