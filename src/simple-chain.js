const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
function splt(str) {

  let arr = new Array();
  arr = str.split(" )~~");
  arr.pop();

  for (let i = 0; i < arr.length; i++)
      arr[i] = arr[i].slice(2, arr[i].length)
  return arr;
}
const chainMaker = {
  result: "",
  //
  getLength() {
    return splt(this.result).length;
  },
  //
  addLink(value) {
    this.result += "( " + value + " )~~";
    return this;
  },
  //
  removeLink(position) {
    function isInteger(num) {
      return (num ^ 0) === num;
    }
    if (typeof position !== "number" || isInteger(position) !== true) {
        this.result = "";
        throw new Error("You can't remove incorrect link!");
    }
    let arr = splt(this.result);
    if (arr.length < position || position <= 0) {
        this.result = "";
        throw new Error("You can't remove incorrect link!");
    }
    arr.splice(position - 1, 1);
    this.result = "";
    for (let i = 0; i < arr.length; i++) {
        this.addLink(arr[i]);
    }
    return this;
  },
  //
  reverseChain() {
    let arr = splt(this.result);
    this.result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        this.addLink(arr[i]);
    }
    return this;
  },
  //
  finishChain() {
    this.result = this.result.slice(0, this.result.length - 2);
    let str = this.result;
    this.result = "";
    return str;
  }
};

module.exports = {
  chainMaker
};
