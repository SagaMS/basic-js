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
    return this;
  },
  removeLink(position) {
    if ((isNaN(position) || typeof position ==='string') || !Number.isInteger(position) || position > this.getLength() ||typeof position ==='string'|| position<=0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultS =''
  for (let index = 0; index < this.chain.length; index++) {
      const element = `( ${this.chain[index]} )${index+1<this.chain.length?'~~':""}`;
      resultS +=element;
  }
  this.chain =[];
  return resultS;
  }
};

module.exports = {
  chainMaker
};
