const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
  },
  removeLink(position) {   
   if (delete this.chain[position] !== undefined) {
    throw new UserException("You can't remove incorrect link!");
   }else {
    delete this.chain[position];
   }
  },
  reverseChain() {
    if (this.chain.length !== 0) {
      this.chain = this.chain.reverse();
    } else {
      throw new UserException("You can't revers chain rigth now!");
    }
  },
  finishChain() {
    return this.chain;
  }
};

module.exports = {
  chainMaker
};
