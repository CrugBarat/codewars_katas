// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

let positiveSum = (arr) => {
  arr.push(0);
  return arr.map(x => x >= 0 ? x : 0).reduce((x, y) => x + y);
}

module.exports = positiveSum;
