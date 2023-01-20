'use strict';


/*
let numFilms;
let numGenres;
const personalMovieDB = {
    count: numFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    numFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numFilms === 0 || isNaN(numFilms)) {
        alert('Произошла ошибка! Введите числовое значение!');
        numFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0;  i < numFilms; i++ ) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
        while (lastFilm === 0 || lastFilm === '') {
            alert('Произошла ошибка! Введите текстовое значение!');
            lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
        }
        while (lastFilm.length > 50) {
            alert('Название фильма длинее, чем 50 символов!');
            lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        }

        let rate = +prompt('На сколько оцените его по 10-ти бальной шкале?', '');
        while (rate === 0 || isNaN(rate)) {
            alert('Произошла ошибка! Введите числовое значение!');
            rate = +prompt('На сколько оцените его по 10-ти бальной шкале?', '');
        }

        personalMovieDB.movies[lastFilm] = rate;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    }
    if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель!');
    }
    if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        numGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres[i] = numGenres;
    }
}

function showMyDB(hidden) {
    personalMovieDB.privat = hidden;
   if (personalMovieDB.privat === false) {
       console.log (personalMovieDB);
   }
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(false);
*/


// function getTimeFromMinutes(minute) {
//     if (!Number.isInteger(minute) ||typeof minute === 'string' || minute < 0) {
//         return ( "Ошибка, проверьте данные");
//     } else {
//         let hours = Math.trunc(minute/60);
//         let minutes = minute % 60;
//
//         if (hours === 1) {
//             console.log (`Это ${hours} час и ${minutes} минут`);
//         } else if (hours === 0) {
//             console.log (`Это ${hours} часов и ${minutes} минут`);
//         } else {
//             console.log (`Это ${hours} часа и ${minutes} минут`);
//         }
//     }
// }
//
// getTimeFromMinutes(-150);


/*function findMaxNumber(oneNum, twoNum, threeNum, fourNum) {
    if (typeof oneNum !== 'number' || typeof twoNum !== 'number' ||
        typeof threeNum !== 'number' || typeof fourNum !== 'number') {
        return 0;
    } else {
        return Math.max(oneNum, twoNum, threeNum, fourNum);
    }
}

const perem = findMaxNumber(1, 12, '30', 0);

console.log(perem);*/

function fib(number) {
    const arr = [];
    let str = '';

    if (typeof number !=='number' || number === 0 || !Number.isInteger(number)) {
        return 'пустой текст'
    } else if (number === 1) {
        return 0;
    } else {
        for (let i = 0; i < number; i++ ) {
            if (i < 2) {
                arr.push(i);
            } else {
                arr.push(arr[i - 2] + arr[i - 1])
            }
        }
    }

    arr.forEach((e) => {
        str = str + `${e} `
    });

    return str.slice(0, -1);

}

console.log(fib(15));






