const consecutiveDucks = require('./main.js')

describe("Consecutive Ducks", () => {

  test('T1', () => {
    expect(consecutiveDucks(9)).toBe(true)
  })

  test('T2', () => {
    expect(consecutiveDucks(64)).toBe(false)
  })

  test('T3', () => {
    expect(consecutiveDucks(42)).toBe(true)
  })


})
