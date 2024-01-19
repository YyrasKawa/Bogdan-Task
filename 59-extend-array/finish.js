/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, number) => sum + number, 0);
  }

  onlyNumbers() {
    return this.filter((el) => typeof el === 'number')
  }
}

const myExtendedArray = new ExtendedArray(10, 4, 5)
const myExtendedArray2 = new ExtendedArray(10, 'abs', 4, 5, true);

console.log(myExtendedArray)
console.log(myExtendedArray.sum());
console.log(myExtendedArray2.sum());
