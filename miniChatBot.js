const movieFirst = {
  title: 'Before Sunrise',
  openingDate: '1996년 3월 16일',
};

const movieSecond = {
  title: 'Inception',
  openingDate: '2010년 7월 21일',
};

const title = document.getElementById('title');
const openingDate = document.getElementById('openingDate');
const genre = document.getElementById('genre');

function openMovie(movie) {
  console.log('출력');
  title.innerText = movie.title;
  openingDate.innerText = movie.openingDate;
  genre.innerText = movie.genre;
}
