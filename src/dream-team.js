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
  const team = []
  if (Array.isArray(members)){
    members.map((member) => {
      if (typeof member === 'string'){
        team.push(member.trim().split('')[0])
      }
    })
    return team.sort().join('').toLocaleUpperCase();
  } else {
    return false;
  }
  

}

module.exports = {
  createDreamTeam
};
