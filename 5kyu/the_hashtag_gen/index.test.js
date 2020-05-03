const generateHashtag = require('./index.js');

describe("The Hashtag Generator", () => {

  test('T1', () => {
    expect(generateHashtag(" Hello there thanks for trying my Kata" )).toBe("#HelloThereThanksForTryingMyKata");
  });

  test('T2', () => {
    expect(generateHashtag("    Hello     World   " )).toBe("#HelloWorld");
  });

  test('T3', () => {
    expect(generateHashtag("")).toBe(false);
  });

  test('T4', () => {
    expect(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false);
  });

});
