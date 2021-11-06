function changeSpeak() {
  const inputValue = document.getElementById('input').ariaValueMax;

  if (inputValue == order.red) {
    document.body.style.backgroundColor = 'red';
  } else if (inputValue == order.blue) {
    document.body.style.backgroundColor = 'blue';
  } else {
    const chatting = document.getElementById('chatBot');
    const writing = new Writer(chatting, { loop: false });

    writing.typeString('what?').pauseFor(1000).deleteAll().start();
  }

  document.getElementById('input').value = '';
}
