const splitInteger = require('./index.js');

describe("Almost Even", () => {

  test('T1', () => {
    expect(splitInteger(10, 1)).toStrictEqual([10]);
  });

  test('T2', () => {
    expect(splitInteger(2, 2)).toStrictEqual([1,1]);
  });

  test('T3', () => {
    expect(splitInteger(20, 5)).toStrictEqual([4,4,4,4,4]);
  });

  test('T4', () => {
    expect(splitInteger(4000, 37)).toStrictEqual([108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 109, 109, 109]);
  });

  test('T5', () => {
    expect(splitInteger(258, 15)).toStrictEqual([17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18]);
  });

});
