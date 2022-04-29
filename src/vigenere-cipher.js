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
  constructor (rev) {
    this.rev = rev
  }
  encrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    const stringKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbols = stringKey.split('')

    const wordSymbols = word.split('')
    let keySymbols = key.split('')
    let k = 0
    for (let i = 0; i < wordSymbols.length; i++) {
      let wordIdx = symbols.indexOf(wordSymbols[i].toUpperCase())
      let keyIdx = symbols.indexOf(keySymbols[k % keySymbols.length].toUpperCase())
      if (wordIdx > -1) {
        k++
        console.log(wordIdx + ' - ' + keyIdx)
        wordSymbols[i] = symbols[((wordIdx + keyIdx) % (symbols.length))]
      }
    }

    if (this.rev === false) {
      return wordSymbols.reverse().join('')
    }

    return wordSymbols.join('')
  }
  decrypt(word, key) {
    if (word === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    const stringKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbols = stringKey.split('')

    const wordSymbols = word.split('')
    let keySymbols = key.split('')
    let k = 0
    for (let i = 0; i < wordSymbols.length; i++) {
      let wordIdx = symbols.indexOf(wordSymbols[i].toUpperCase())
      let keyIdx = symbols.indexOf(keySymbols[k % keySymbols.length].toUpperCase())
      if (wordIdx > -1) {
        k++
        console.log(wordIdx + ' - ' + keyIdx)
        wordSymbols[i] = symbols[((wordIdx - keyIdx + 26) % (symbols.length))]
      }
    }

    if (this.rev === false) {
      return wordSymbols.reverse().join('')
    }

    return wordSymbols.join('')
  }
}

const directMachine = new VigenereCipheringMachine();

//AEIHQX SX DLLU!

module.exports = {
  VigenereCipheringMachine
};
