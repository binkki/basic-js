const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = calculateTurns(disksNumber);
  let seconds = Math.floor(60 * 60 * turns / turnsSpeed);
  return {turns, seconds};
}

function calculateTurns(x) {
  return x === 0 ? 0 : 1 + 2 * calculateTurns(x - 1);
}

module.exports = {
  calculateHanoi
};
