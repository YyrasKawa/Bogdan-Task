/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Yury';
const myLastName = 'Kavalenka';
const myProfession = 'Developer';

const aboutMy = `My name is ${myName} ${myLastName} and I'm ${myProfession}`;
const aboutMy2 = 'My name is ' + myName + ' ' + myLastName + ' and I am ' + myProfession;
 console.log(aboutMy);
 console.log(aboutMy2);
