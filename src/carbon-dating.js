const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {

  if (typeof(sampleActivity) == 'string' && typeof(Number(sampleActivity)) == 'number' && sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY) {
      var n0 = Math.log(MODERN_ACTIVITY / sampleActivity);
      var t1 = HALF_LIFE_PERIOD / Math.log(2);
      let result = n0 * t1;
      return Math.ceil(result);
  }
  return false;
}

module.exports = {
  dateSample
};
