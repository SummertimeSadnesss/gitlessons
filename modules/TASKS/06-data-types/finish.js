"use strict";

/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */



const a = 'Строка';
const b = 5;
const c = true;
const d = null;
const e = undefined;
const f = {};
const g = [];

const massive = ['Строка', 5, true, null, undefined, {}, []]

massive.forEach(e => console.log(typeof (e)));

