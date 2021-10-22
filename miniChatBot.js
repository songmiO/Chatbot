const movieFirst = {
  title: 'Before Sunrise',
  openingDate: '1998년 3월 16일',
};

const title = document.getElementById('title');
const openingDate = document.getElementById('openingDate');

function openMovie(movie) {
  title.innerText = movie.title;
  openingDate.innerText = movie.openingDate;
  genre.innerText = movie.genre;
}
