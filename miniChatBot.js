function changeSpeak() {
  const inputValue = document.getElementById('input').ariaValueMax;

  if (inputValue == order.blue) {
    document.body.style.backgroundColor = 'blue';
  } else if (inputValue == order.white) {
    document.body.style.backgroundColor = 'white';
  } else {
    const chatting = document.getElementById('chatBot');
    const writing = new Writer(chatting, { loop: false });

    writing
      .typeString('잘못알아들었다냥')
      .pauseFor(1300)
      .deleteAll()
      .typeString('한 번 더 말해봐!')
      .pauseFor(2500)
      .start();
  }
  console.log('출력');
  document.getElementById('input').value = '';
}
