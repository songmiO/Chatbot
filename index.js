const call = document.getElementById('myNickName');
const callEvent = document.getElementById('calling');

callEvent.addEventListener('click', function () {
  setTimeout(calling, 1000);
});

function calling() {
  call.innerHTML = '초코칩';
  callEvent.innerHTML = '010-1004-1004';
}
