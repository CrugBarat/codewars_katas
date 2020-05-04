const josephus = require('./index.js');

describe("Josephus Survivor", () => {

  test('T1', () => {
    expect(josephus([1,2,3,4,5,6,7,8,9,10],1)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  test('T2', () => {
    expect(josephus(["C","o","d","e","W","a","r","s"],4)).toStrictEqual(['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']);
  });

  test('T3', () => {
    expect(josephus([],3)).toStrictEqual([]);
  });

});
