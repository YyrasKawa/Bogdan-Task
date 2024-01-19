/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */
firstFunction(2, 4)

console.log(firstFunction(2, 4));
function firstFunction(a, b) {
  return a + b
}

firstFunction = 123

console.log(firstFunction)

const secondFunction = function (a, b) {
  return a + b
}
