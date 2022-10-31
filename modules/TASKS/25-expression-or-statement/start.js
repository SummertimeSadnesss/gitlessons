/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 // <- выражение инструкиця

const myObject = {
  x: 10,
  y: true,
} //инструкиция

myObject.z = 'abc' // <- выражение инструкиця

delete myObject.x // инструкиия

let newVariable // инструкиця

newVariable = 30 + 5 // <- выражение инструкиця

console.log(newVariable)

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}
