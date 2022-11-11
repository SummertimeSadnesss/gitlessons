


const numberOfFilms = prompt('Сколько фильмов уже посмотрели?', 'Введите количество фильмов');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const lastFilms = prompt('Один из последних просмотренных фильмов?', 'Введите название фильма');
const rateFilms = prompt('На сколько цените его? (по 10-ти бальной шкале)', '10');

personalMovieDB.count = +numberOfFilms;
personalMovieDB.movies[lastFilms] = +rateFilms;

console.log(personalMovieDB);