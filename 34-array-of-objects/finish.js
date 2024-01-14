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


const cars = [
  { carBrand: "BMW", price: 150, isAvailableForSale: true },
  { carBrand: "FIAT", price: 50, isAvailableForSale: false },
  { carBrand: "Volvo", price: 120, isAvailableForSale: false },
];

cars.push({ carBrand: "SEAT", price: 70, isAvailableForSale: true})

console.log(cars)