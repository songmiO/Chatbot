// input창에 안녕 입력, 전송 버튼 누르면 -> 박스 속 글자가 바뀐다.

function confirm() {
  const inputValue = document.getElementsByClassName('chat-input')[0].value;
  const chatBotBox = document.getElementsByClassName('chatbot-box')[0];

  if (inputValue == '안녕') {
    chatBotBox.innerHTML = '반가워!';
  } else if (inputValue == '너 이름이 뭐야?') {
    chatBotBox.innerHTML = '난 전기 포켓몬 피카츄야!';
  } else if (inputValue == '백만볼트') {
    document.getElementsByClassName(
      'chatbot-change-image'
    )[0].style.visibility = 'visible';
    // 글자와 그림 동시에 나타나게 하고 싶은데 안됨!
    // document.getElementsByClassName('chatbot-box')[0].innerHTML = '피카~츄!';
  } else if (inputValue == '오늘 기분 어때?') {
    chatBotBox.innerHTML = '아주 좋아!😊';
  } else if (inputValue == '사랑해') {
    chatBotBox.innerHTML = '내가 더 ❤️❤️❤️';
  } else {
    console.log('출력');
    chatBotBox.innerHTML = '아직 배우지 않은 말이예요. 가르쳐 주세요!';
  }
}
