const check = require('./index.js');

describe("You only need one", () => {

  test('T1', () => {
    expect(check([66, 101], 66)).toBe(true);
  });

  test('T2', () => {
    expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
  });

  test('T3', () => {
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
  });

});
