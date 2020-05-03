const squareDigits = require('./index.js')

describe("Square Digits", () => {

  test('T1', () => {
    expect(squareDigits(9119)).toBe(811181);
  });

  test('T2', () => {
    expect(squareDigits(424)).toBe(16416);
  });

});
