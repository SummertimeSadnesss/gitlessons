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

/*function fib(number) {
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

console.log(fib(15));*/

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(obj) {
//         const { languages } = obj.skills;
//         let strEng = '';
//
//         for (let value of languages) {
//             strEng += `${value} `;
//         }
//
//         return `Мне ${obj.age} и я владею языками: ${strEng.toUpperCase()}`;
//
//     }
// };

// function showExperience(plan) {
//     const { exp } = plan.skills
//     return exp;
// }

/*Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков.
Если ни один не указан, то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки.*/

/*function showProgrammingLangs(plan) {
    const { programmingLangs: langs } = plan.skills;
    let langCount = '';

    if (Object.keys(langs).length === 0){
        return langCount;
    } else {
        for (let key in langs) {
                langCount += `Язык ${key} изучен на ${langs[key]}` + '\n';
        }
        return langCount;
    }
}

// showExperience(personalPlanPeter);

console.log(showProgrammingLangs(personalPlanPeter));*/

/*Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.*/

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))


/*
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function showFamily(arr) {
    let fam = '';

    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        arr.forEach((e) => {
            fam += `${e} `;
        });
    }
    return  `Семья состоит из: ${fam}`;
}
console.log(showFamily(family));

function standardizeStrings(arr) {
    let newArr;

    newArr = arr.map(e => console.log(e.toLowerCase()));
    return newArr;
}

standardizeStrings(favoriteCities);*/


// const someString = '';
//
// function reverse(str) {
//     if (typeof str !== 'string') {
//         return 'Ошибка'
//     } else {
//         return str.split('').reverse().join('');
//     }
// }
//
// console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr = '') {
    let newArr = [];

    arr.forEach(elem => {
        if (elem !== missingCurr) {
            newArr.push(elem);
        }
    });

}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');