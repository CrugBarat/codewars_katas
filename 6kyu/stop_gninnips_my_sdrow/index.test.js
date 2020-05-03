const spinWords = require('./index.js');

describe("Spin Words", () => {

  test('T1', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });

  test('T2', () => {
    expect(spinWords('This is a test')).toBe('This is a test');
  });

  test('T3', () => {
    expect(spinWords('This is another test')).toBe('This is rehtona test');
  });

});
