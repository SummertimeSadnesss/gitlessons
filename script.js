//
// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     // Пишем решение вот тут
//     arr.forEach(elem => result.push(elem))
//
//     // Не трогаем
//     return result;
// }

//     Заполните новый массив (result) числами из старого (arr).
//     Количество элементов в массиве можно получить
//     как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//     Должен получиться точно такой же массив

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//
//     // Не трогаем
//     return result;
// }
//
// firstTask();


// Измените данный массив так, чтобы все числа были увеличены в 2 раза,
// а если попадается строка строка - то к ней было добавлено " - done".
//     Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//
//     // Пишем решение вот тут
//     data.forEach((elem, index) => {
//         if (typeof elem === 'string') {
//             data[index] = elem + ' - done';
//         } else {
//             data[index] = elem * 2;
//         }
//     })
//
//     // Не трогаем
//     return data;
// }


// Место для второй задачи
/*function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result2 = [];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            result2[i] = data[i] + ' - done';
        } else {
            result2[i] = data[i] * 2;
        }
    }

    console.log(result2)
    // Не трогаем
    return data;
}
secondTask()*/

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     // Пишем решение вот тут
//     data.forEach((elem) => result.push(elem));
//     result.reverse();
//
//     // Не трогаем
//     return result;
// }


// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - i - 1];
//     }
//
//     console.log(result)
//
//
//     // Не трогаем
//     return result;
// }
//
// thirdTask()

const lines = 5;
let result = '';


for (let i = 0; i <= lines; i++) {

    for (let j = 0; j <= lines - i - 1; j++) {
        result += ' ';
    }

    for (let k = 1; k <= 2 * i + 1; k++) {
        result += '*';
    }

    result += '\n';
}

console.log(result)