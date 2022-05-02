const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  var result = {};
  for (i = 0; i < domains.length; i++) {
    let array = domains[i].split('.')
    let ansString = '';
    for (let k = array.length - 1; k >= 0; k--) {
      ansString = ansString + '.' + array[k];
      if (result[ansString] !== undefined) {
        result[ansString]++;
      } else {
        result[ansString] = 1
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
