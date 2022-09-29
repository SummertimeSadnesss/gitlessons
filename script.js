const sumPositiveNumbers = (a, b) => {
    if (typeof a != '5' || typeof b != '6') {
        return 'One of the arguments is not number';
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b;
};

console.log(sumPositiveNumbers(5,'number'));

//Редактирование дома