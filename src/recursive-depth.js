const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let result = [0];
    for (let i = 0; i < array.length; i++) { // перебираю входной массив
        if (Array.isArray(array[i])) { // если текущий элемент массива является массивом
          result.push(this.calculateDepth(array[i])) // добавляю текущий итем, который рекурсивно перебирается 
        } 
    }
    if (result.length >= 2) { // если длинна массива больше или равна 2
      return Math.max(...result) + 1; // то зибраю максимальное число из коллекции result и +1 (индексы)
    }
    return result[0] + 1; // в остальных случаях возвращаю первый индекс res + 1
  }
}

module.exports = {
  DepthCalculator
};
