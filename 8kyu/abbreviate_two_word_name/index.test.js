const abbrevName = require('./index.js');

describe("Abbreviate a Two Word Name", () => {

  test('T1', () => {
    expect(abbrevName("Sam Harris")).toBe("S.H");
  });

  test('T2', () => {
    expect(abbrevName("Patrick Feenan")).toBe("P.F");
  });

  test('T3', () => {
    expect(abbrevName("Evan Cole")).toBe("E.C");
  });

  test('T4', () => {
    expect(abbrevName("P Favuzzi")).toBe("P.F");
  });

  test('T5', () => {
    expect(abbrevName("David Mendieta")).toBe("D.M");
  });

});
