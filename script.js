

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// /*
// function films () {
//     let numFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     const personalMovieDB = {
//         count: numFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };
//
//     while (numFilms === 0 || isNaN(numFilms)) {
//         alert('Произошла ошибка! Введите числовое значение!');
//         numFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//
//     for (let i = 0;  i < numFilms; i++ ) {
//         let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//
//         console.log(lastFilm);
//
//         while (lastFilm === 0) {
//             alert('Произошла ошибка! Введите текстовое значение!');
//             lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//         }
//
//         while (lastFilm.length > 50) {
//             alert('Название фильма длинее, чем 50 символов!');
//             lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//         }
//
//         let rate = +prompt('На сколько оцените его по 10-ти бальной шкале?', '');
//
//         while (rate === 0 || isNaN(rate)) {
//             alert('Произошла ошибка! Введите числовое значение!');
//             rate = +prompt('На сколько оцените его по 10-ти бальной шкале?', '');
//         }
//
//         personalMovieDB.movies[lastFilm] = rate;
//     }
//
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов!');
//     }
//
//     if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель!');
//     }
//
//     if (personalMovieDB.count > 30) {
//         alert('Вы киноман!');
//     }
//
//     console.log(personalMovieDB)
// }
//
// films()*/
//
// function myName(name) {
//     return 'Hello, ' + name;
// }
//
// const per = myName('Андрей');
// console.log(per);
//
// // Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа
// // и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
//
// function myArr(num) {
//     return [num - 1, num, num + 1];
// }
//
// const per2 = myArr(10);
//
// console.log(per2)


function myNumProgress(numOne, numTwo) {
    let prog = 0;
    for (let i = 1; i <= numTwo; i++) {
        let count = numOne * i;
        prog = prog + '---' + count;
    }
console.log(prog)

}

myNumProgress(3, 10);

// const per3 = myNumProgress(3, 10);

// console.log(per3)









