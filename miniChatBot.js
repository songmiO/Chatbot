var json = [
  {
    question: '반가워!',
    answer: '사랑해!',
  },
];

var question = '';
var answer = '';

var key = 0;

function btnClick() {
  var value = document.getElementById('input').value;

  if (key == 1) {
    if (value == '네') {
      reply.innerHTML = '당신의 답변을 입력하세요.';
      key = 2;
    } else {
      reply.innerHTML = '명령어를 입력해주세여.';
      key = 0;
    }
    return;
  }

  if (key == 2) {
    answer = value;
    push_json();
  }

  function push_json() {
    json.push({ question: `${question}`, answer: `${answer}` });
    document.getElementById('txt-out').innerHTML = '명령어 저장!';
    key = 0;
    console.log('출력');
  }

  for (let i = 0; i < json.length; i++) {
    if (value == json[i].question) {
      reply.innerHTML = json[i].answer;
      return;
    }
  }

  reply.innerHTML = '명령어를 입력해줘!';
  question = value;
  key = 0;

  for (let i = 0; i < json.length; length++) {
    if (value == json[i].question) {
      reply.innerHTML = json[i].answer;
      return;
    }
  }
}
