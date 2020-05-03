const anagrams = require('./main.js')

describe("Where's My Anagram", () => {

  test('T1', () => {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual(['aabb', 'bbaa'])
  })

  test('T2', () => {
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toStrictEqual(['carer', 'racer'])
  })

  test('T3', () => {
    expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).toStrictEqual([])
  })

})
