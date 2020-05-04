const reverse = require('./index.js');

describe("I need more speed!", () => {

  test('T1', () => {
    expect(reverse([1,2,3,4,5])).toStrictEqual([5,4,3,2,1]);
  });

  test('T2', () => {
    expect(reverse(['hello','world','how','are','you','?'])).toStrictEqual(['?','you','are','how','world','hello']);
  });

  test('T3', () => {
    expect(reverse([{a:1},{b:2}])).toStrictEqual([{b:2},{a:1}]);
  });

});
