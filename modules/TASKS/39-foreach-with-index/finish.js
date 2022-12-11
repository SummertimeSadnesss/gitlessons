/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

<<<<<<< HEAD
function cityInfo (city, index) {
    return `${city} is at the index ${index} in the myCities array`
}


myCities.forEach((city,index) => {
    console.log(cityInfo(city, index))
})
=======
const cityInfo = (value, index) => `${value} is at the index ${index} in the myCities array`;

myCities.forEach((value, index) => {
    let show = cityInfo(value, index);
    console.log(show)
});


>>>>>>> 2647d4c26ace12051a4dc1198ea0adc05f1de3fd
