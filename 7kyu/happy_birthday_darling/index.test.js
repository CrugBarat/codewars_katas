const womensAge = require('./index.js');

describe("Happy Birthday Darling", () => {

  test('T1', () => {
    expect(womensAge(32)).toBe( "32? That's just 20, in base 16!");
  });

  test('T2', () => {
    expect(womensAge(39)).toBe("39? That's just 21, in base 19!");
  });

  test('T3', () => {
    expect(womensAge(22)).toBe("22? That's just 20, in base 11!");
  });

  test('T4', () => {
    expect(womensAge(65)).toBe("65? That's just 21, in base 32!");
  });

  test('T5', () => {
    expect(womensAge(83)).toBe("83? That's just 21, in base 41!");
  });

});
