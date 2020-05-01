const expressionMatter = require('./main.js')

describe("Expressions Matter", () => {

  test('T1', () => {
    expect(expressionMatter(2, 1, 2)).toEqual(6)
  })

  test('T2', () => {
    expect(expressionMatter(3, 5, 7)).toEqual(105)
  })

  test('T3', () => {
    expect(expressionMatter(2, 10, 3)).toEqual(60)
  })

  test('T4', () => {
    expect(expressionMatter(1, 1, 10)).toEqual(20)
  })

  test('T5', () => {
    expect(expressionMatter(10, 5, 6)).toEqual(300)
  })

})
