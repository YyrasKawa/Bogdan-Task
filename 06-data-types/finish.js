/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */


const myString = 'It is my string';
const myNumber = 41;
const myBoolean = true;
const myNull = null;
let myUndefined;
const myObject = {
    name: 'Yury',
    age: 41,
    city: 'Warsaw'
}

const myArray = ['Yury', 41, 'Warsaw'];

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof myArray);