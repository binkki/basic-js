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
  let result = "";
  let count = 0;
  let current = "";
  let i = 0;
  while (true) {
      if (str[i] !== current) {
          result += count > 1 ? count.toString() + current : current;
          count = 1;
          current = str[i];
      } else {
          count++;
      }
      i++;
      if (i > str.length) {
          break;
      }
  }
  return result;
}

module.exports = {
  encodeLine
};
