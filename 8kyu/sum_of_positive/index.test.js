const positiveSum = require('./index.js');

describe("Sum of positive", () => {

  test('T1', () => {
    expect(positiveSum([1,2,3,4,5])).toEqual(15);
  });

  test('T2', () => {
    expect(positiveSum([1,-2,3,4,5])).toEqual(13);
  });

  test('T3', () => {
    expect(positiveSum([])).toEqual(0);
  });

  test('T4', () => {
    expect(positiveSum([-1,-2,-3,-4,-5])).toEqual(0);
  });

  test('T5', () => {
    expect(positiveSum([-1,2,3,4,-5])).toEqual(9);
  });

});
