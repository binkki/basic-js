const { NotImplementedError } = require('../extensions/index.js');

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
  let result = str;
  let addition = "";
  let separator = "+";
  let additionSeparator = "|";
  let repeatTimes = 1;
  let additionRepeatTimes = 1;
  Object.entries(options).map(element => {
    switch (element[0]) {
      case "addition":
        addition += element[1];
        break;
      case "separator":
        separator = element[1];
        break;
      case "additionSeparator":
        additionSeparator = element[1];
        break;
      case "repeatTimes":
        repeatTimes = element[1];
        break;
      case "additionRepeatTimes":
        additionRepeatTimes = element[1];
    }
  })
  let temp = addition;
  for (let i = 1; i < additionRepeatTimes; i++) {
    addition += additionSeparator + temp;
  }
  temp = str + addition;
  result = temp;
  for (let i = 1; i < repeatTimes; i++) {
    result += separator + temp;
  }
  return result;
}

module.exports = {
  repeater
};
