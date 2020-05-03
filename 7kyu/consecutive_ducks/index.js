// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

// Notes
// Guaranteed constraint : 2 ≤ N ≤ (2^32) -1

let consecutiveDucks = (num) => {
  return !Number.isInteger(Math.log2(num));
}

module.exports = consecutiveDucks;
