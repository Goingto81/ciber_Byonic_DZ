const Numbers = (() => {
  const values = Symbol("values");
  const threshold = Symbol("threshold");

  return class Numbers {
    constructor(thresholdValue, numbersArray) {
      this[values] = numbersArray;
      this[threshold] = thresholdValue;
    }

    getGreaterThanThreshold() {
      return this[values].filter((value) => value > this[threshold]);
    }

    getLessThanThreshold() {
      return this[values].filter((value) => value < this[threshold]);
    }
  };
})();

let numbers = new Numbers(50, [10, 20, 23, 11, 5, 6, 90, 33, 45, 67]);
let gt = numbers.getGreaterThanThreshold();
let lt = numbers.getLessThanThreshold();

console.log(gt);
console.log(lt);
