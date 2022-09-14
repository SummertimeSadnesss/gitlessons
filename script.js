const name = 'Андрей';
const city = 'Астрахань';

console.log(`Меня зовут ${name}, я живу городе ${city}`);



console.log((a, b) => a + b);

myFunc1 = function(value, multiplier = 1) {
    return value * multiplier;
}

console.log(myFunc1(5));

myFunc2 = (value, multiplier = 1) => {
    return value * multiplier;
}

console.log(myFunc2(6));

//comment