/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

const res = (parseInt(myVariable1) <= parseInt(myVariable2));
console.log(res);

myVariable1 = '20'
myVariable2 = 100

const res2 = (parseInt(myVariable1) <= parseInt(myVariable2));
console.log(res2);

// Напишите код здесь
