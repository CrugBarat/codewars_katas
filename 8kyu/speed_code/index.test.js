const arrayMadness = require('./index.js');

describe("SpeedCode #2 - Array Madness", () => {

  test('T1', () => {
    expect(arrayMadness([4,5,6],[1,2,3])).toBe(true);
  });

  test('T2', () => {
    expect(arrayMadness([5,6,7],[4,5,6])).toBe(false);
  });

  test('T3', () => {
    expect(arrayMadness([1,2,3],[0,1,2])).toBe(true);
  });

  test('T4', () => {
    expect(arrayMadness([2,5,3,4,1],[3,3,3,3,3])).toBe(false);
  });

  test('T5', () => {
    expect(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13])).toBe(false);
  });

});
