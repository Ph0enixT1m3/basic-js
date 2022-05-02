const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = str + ''
  if (options.addition !== undefined) {
      // result = ''
      let separator = '|'
      let number = 1;
      if (options.additionSeparator !== undefined) {
        separator = options.additionSeparator;
      }
      if (options.additionRepeatTimes !== undefined) {
          number = options.additionRepeatTimes
      }
      for (let i = 0; i < number - 1; i++) {
          result = result + options.addition + separator;
      }
      result = result + options.addition
  }
  let res3 = result;
  let result2 = ''
  let separator = '+'
  let number = 1;
  if (options.repeatTimes !== undefined) {
      number = options.repeatTimes
  }
  if (options.separator !== undefined) {
      separator = options.separator;
  }
  for (let i = 0; i < options.repeatTimes - 1; i++) {
      result2 = result2 + res3 + separator;
  }
  result2 = result2 + res3
  return result2;
}

module.exports = {
  repeater
};
