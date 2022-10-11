/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

// // const str = 'World'

//console.log(str instanceof String);
//console.log(typeof(str));

//const str2 = str.toUpperCase();

//console.log(str2);



const myString = new String('Bogdan')
console.log(myString instanceof String)
console.log(typeof myString)
console.log(myString.toUpperCase())
