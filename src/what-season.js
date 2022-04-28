const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
  }
  let m = date.getMonth()
  if (m === 11 || m <= 1) {
    return 'winter'
  }
  if (m <= 4) {
    return 'spring'
  }
  if (m <= 7) {
    return 'summer'
  }
  if (m <= 10) {
    return 'fall'
  }
  throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
