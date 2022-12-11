/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

<<<<<<< HEAD
const arr = [];

postsJSON.forEach((e) => {
  arr.push(JSON.parse(e))

});

console.log(arr)
console.log(arr[1].postId)
console.log(arr[3].commentsQuantity)
=======
const newArr = postsJSON.map((elem) => {
  return JSON.parse(elem)
})
console.log(newArr)
console.log(newArr[1].postId)
console.log(newArr[newArr.length - 1].commentsQuantity)
>>>>>>> 2647d4c26ace12051a4dc1198ea0adc05f1de3fd
