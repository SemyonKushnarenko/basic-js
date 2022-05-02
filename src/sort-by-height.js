const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = []
  arr.forEach(function (element, index) {
    if (element === -1) {
      indexes.push(index)
    }
  })
  let newArray = arr.filter(function (element) {
    return element != -1
  })
  newArray.sort((a, b) => a - b)
  indexes.forEach(function (index) {
    newArray.splice(index, 0, -1)
  })
  return newArray
}

module.exports = {
  sortByHeight
};
