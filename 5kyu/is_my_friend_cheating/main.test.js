const removeNb = require('./main.js')

describe("Is My friend cheating?", () => {

  test('T1', () => {
    expect(removeNb(26)).toStrictEqual([[15,21], [21,15]])
  })

  test('T2', () => {
    expect(removeNb(100)).toStrictEqual([])
  })

})
