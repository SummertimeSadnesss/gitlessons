/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]

<<<<<<< HEAD
function findPostById(postId, posts) {
  return posts.forEach((post) => post.postId === postId)
}

console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }
=======
function findPostById(id, arr) {
  arr.forEach((elem) => {
    if (id === elem.postId) {
    }
  });
}
>>>>>>> 2647d4c26ace12051a4dc1198ea0adc05f1de3fd

console.log(findPostById(1355, posts)) // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(613, posts)) // undefined
