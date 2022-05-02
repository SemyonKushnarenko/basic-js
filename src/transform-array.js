const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr]
  let result = []

  arr.forEach(function (element, index) {
    if (element === "--discard-next") {
      if (newArr[index + 1] != undefined) {
        newArr[index + 1] = undefined
      }
    } else if (element === "--discard-prev") {
      if (newArr[index - 1] != undefined) {
        result.pop()
      }
    } else if (element === "--double-next") {
      if (newArr[index + 1] != undefined) {
        result.push(newArr[index + 1])
      }
    } else if (element === "--double-prev") {
      if (newArr[index - 1] != undefined) {
        result.push(newArr[index - 1])
      }
    } else if (newArr[index] != undefined) {
      result.push(element)
    }
  });
  return result
}

module.exports = {
  transform
};
