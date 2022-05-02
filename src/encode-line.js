const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split(''),
  k = 1,
  res = ''
  array.forEach((item, i) => {
    if (item === array[i + 1]) {
      k++
    } else {
      if (k === 1) {
        res += item
      } else {
        res += (k + item)
      }
      k = 1
    }
  })
  return res
}

module.exports = {
  encodeLine
};
