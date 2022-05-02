const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('').map(Number)
  let newNums = []
  arr.forEach((digit, ind) => {
    let newArr = [...arr]
    newArr.splice(ind, 1)
    let numString = newArr.join('')
    newNums.push(Number(numString))
  })
  return Math.max(...newNums)
}

module.exports = {
  deleteDigit
};
