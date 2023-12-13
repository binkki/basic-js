const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(data, key) {
    if (data === undefined || data === "") {
      throw new Error('Incorrect arguments!');
    }
    if (key === undefined || key === "") {
      throw new Error('Incorrect arguments!');
    }
    let frase = "";
    while (data.length > frase.length) {
      frase += key;
    }
    let result = [];
    let j = 0;
    for (let i = 0; i < data.length; i++) {
        let x1 = data[i].toUpperCase();
        let x2 =frase[j].toUpperCase();
        if (x1 >= "A" && x1 <= "Z") {
        let code = x1.charCodeAt(0) + x2.charCodeAt(0) - "A".charCodeAt(0);
        if (code > 90) {
          code -= 26;
        } else if (code < 65) {
          code += 26;
        }
        j++;
      result.push(String.fromCharCode(code));
        } else {
            result.push(data[i]);
        }
    }
    return result.join("");
  }
  decrypt(data, key) {
    if (data === undefined || data === "") {
      throw new Error('Incorrect arguments!');
    }
    if (key === undefined || key === "") {
      throw new Error('Incorrect arguments!');
    }
    let frase = "";
    while (data.length > frase.length) {
      frase += key;
    }
    let result = [];
    let j = 0;
    for (let i = 0; i < data.length; i++) {
        let x1 = data[i].toUpperCase();
        let x2 =frase[j].toUpperCase();
        if (x1 >= "A" && x1 <= "Z") {
        let code = x1.charCodeAt(0) - x2.charCodeAt(0) + "A".charCodeAt(0);
        if (code > 90) {
            code -= 26;
        } else if (code < 65) {
          code += 26;
        }
        j++;
      result.push(String.fromCharCode(code));
        } else {
            result.push(data[i]);
        }
    }
    return result.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
