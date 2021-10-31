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
      .typeString('What are you doign?')
      .pauseFor(1300)
      .deleteAll()
      .typeString('한 번 더 말해봐!')
      .pauseFor(2500)
      .start();
  }

  document.getElementById('input').value = '';
}
