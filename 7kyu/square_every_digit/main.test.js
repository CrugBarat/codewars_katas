const squareDigits = require('./main.js')

describe("IQ Tests", () => {

  test('T1', () => {
    expect(squareDigits(9119)).toBe(811181)
  })

  test('T2', () => {
    expect(squareDigits(424)).toBe(16416)
  })

})
