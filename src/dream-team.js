const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof(members) !== "object" || !Array.isArray(members)) {
    return false;
  }
  let result = "";
  members.map(element => {
    if (typeof(element) === "string") {
      element = element.trim();
      if ((element[0] >= "A" && element[0] <= "Z") || (element[0] >= "a" && element[0] <= "z") )
      result += element[0].toUpperCase();
    }
  })
  return result.split("").sort().join("") ?? false;
}

module.exports = {
  createDreamTeam
};
