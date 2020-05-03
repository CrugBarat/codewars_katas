const findChildren = require('./main.js')

describe("Where is my parents?", () => {

  test('T1', () => {
    expect(findChildren("beeeEBb")).toBe("BbbEeee")
  })

  test('T2', () => {
    expect(findChildren("uwwWUueEe")).toBe("EeeUuuWww")
  })

})
