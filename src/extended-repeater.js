const {
  NotImplementedError
} = require('../extensions/index.js');

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
let {
  repeatTimes,
  separator,
  addition,
  additionRepeatTimes,
  additionSeparator,
} = options
if (!separator) {
  separator = "+"
}
if (!additionSeparator) {
  additionSeparator = "|"
}
if (typeof str != "string" && typeof str != "undefined") {
  str += ""
}

if (typeof addition != "string" && typeof addition != "undefined") {
  addition += ""
}
if (additionRepeatTimes && addition) {
  let newArr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    newArr.push(addition)
  }
  addition = newArr.join(additionSeparator);
}
if (str) {
  if (!repeatTimes) {
    repeatTimes = 1
  }
  if (!addition) {
    addition = ""
  }
  let newArr = [];
  for (let i = 0; i < repeatTimes; i++) {
    newArr.push(str + addition)
  }
  str = newArr.join(separator)
}
return str
}


module.exports = {
  repeater
};