const findChildren = require('./main.js')

describe("Who Likes It?", () => {

  test('T1', () => {
    expect(findChildren("beeeEBb")).toBe("BbbEeee")
  })

  test('T2', () => {
    expect(findChildren("uwwWUueEe")).toBe("EeeUuuWww")
  })

})
