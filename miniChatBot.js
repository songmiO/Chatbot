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

  if (key == 0) {
    if (value == '네') {
      reply.innerHTML = '당신의 답변을 입력하세요.';
      key = 1;
    } else {
      reply.innerHTML = '명령어를 입력해주세여.';
      key = 0;
    }
    return;
  }
}
