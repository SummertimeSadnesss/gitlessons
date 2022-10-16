/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const arr = [
    {
    carBrand: 'Ford',
    price: 1700000,
    isAvailableForSale: true
    },
    {
    carBrand: 'Reno',
    price: 100000,
    isAvailableForSale: true
    },
    {
    carBrand: 'Nissan',
    price: 2000000,
    isAvailableForSale: false
    },
]

arr.push(
    {
    carBrand: 'Toyota',
    price: 2000000,
    isAvailableForSale: true
    }
    )

console.log(arr)