const pigIt = require('./main.js')

describe("Simple Pig Latin", () => {

  test('T1', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
  })

  test('T2', () => {
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
  })

  test('T3', () => {
    expect(pigIt('O tempora o mores !')).toBe('Oay emporatay oay oresmay !')
  })

})
