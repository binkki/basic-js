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
  let result = arr;
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i+1; j < result.length; j++) {
      if (result[i] === -1 || result[j] === -1) {
        continue;
      }
      if (result[i] > result[j]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
