const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = new Map();
  let reversed;
  domains.map(element => {
    let address = "." + element.toString();
    reversed = "";
    while (address !== "") {
      let dotPosition;
      for (dotPosition = address.length - 1; dotPosition >= 0; dotPosition--) {
        if (address[dotPosition] === ".") break;
      }
      reversed += address.substr(dotPosition);
      result.set(reversed, 1 + (result.get(reversed) ?? 0));
      address = address.substr(0, dotPosition);
    }
  });
  return Object.fromEntries(result);
}

module.exports = {
  getDNSStats
};
