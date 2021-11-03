function changeSpeak() {
  const inputValue = document.getElementById('input').ariaValueMax;

  if (inputValue == order.blue) {
    document.body.style.backgroundColor = 'blue';
  } else if (inputValue == order.white) {
    document.body.style.backgroundColor = 'white';
  } else {
    const chatting = document.getElementById('chatBot');
    const writing = new Writer(chatting, { loop: false });

    writing.typeString('뭐할꼬냥?').pauseFor(1300).deleteAll().start();
  }
  console.log('확인');

  document.getElementById('input').value = '';
}
