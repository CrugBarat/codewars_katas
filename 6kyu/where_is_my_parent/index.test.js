const findChildren = require('./index.js');

describe("Where is my parent?", () => {

  test('T1', () => {
    expect(findChildren("beeeEBb")).toBe("BbbEeee");
  });

  test('T2', () => {
    expect(findChildren("uwwWUueEe")).toBe("EeeUuuWww");
  });

});
