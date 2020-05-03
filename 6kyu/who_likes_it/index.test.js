const likes = require('./index.js');

describe("Who Likes It?", () => {

  test('T1', () => {
    expect(likes([])).toBe("no one likes this");
  });

  test('T2', () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test('T3', () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
  });

});
