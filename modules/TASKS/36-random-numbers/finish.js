/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1
const MAX = 10

const myNumbers = [1, 2, 3, 4, 5, 6]




function generateRumNum(min, max, arr) {
    let genNum;
    do {
       genNum = Math.floor((Math.random() * (max - min) + min));
    } while (arr.includes(genNum));
    return genNum;
}


function addElemArray(arr, num) {
    const newArr = [...arr];
    newArr.push(num);
    return newArr;
}

randomNum = generateRumNum(MIN, MAX, myNumbers)
console.log(randomNum)

newArray = addElemArray(myNumbers, randomNum)
console.log(newArray)

addElemArray(myNumbers, newArr)
console.log(newArray)


