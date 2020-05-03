const iqTest = require('./index.js');

describe("IQ Tests", () => {

  test('T1', () => {
    expect(iqTest('2 4 7 8 10')).toBe(3);
  });

  test('T2', () => {
    expect(iqTest('1 2 2')).toBe(1);
  });

  test('T3', () => {
    expect(iqTest('1 2 1 1')).toBe(2);
  });

});
