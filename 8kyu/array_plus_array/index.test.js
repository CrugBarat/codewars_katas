const arrayPlusArray = require('./index.js')

describe("Array Plus Array", () => {

  test('T1', () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toEqual(21);
  });

  test('T2', () => {
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toEqual(-21);
  });

  test('T3', () => {
    expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toEqual(15);
  });

  test('T4', () => {
    expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toEqual(2100);
  });

})
