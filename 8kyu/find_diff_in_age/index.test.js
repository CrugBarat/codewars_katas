const differenceInAges = require('./index.js');

describe("Find the Difference in Age between Oldest and Youngest Family Members", () => {

  test('T1', () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toStrictEqual([6, 82, 76]);
  });

  test('T2', () => {
    expect(differenceInAges([57, 99, 14, 32])).toStrictEqual([14, 99, 85]);
  });

});
